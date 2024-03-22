resource "aws_ecs_cluster" "web_server_cluster" {
  name = "${terraform.workspace}_yz_web_server_cluster"
}

resource "aws_ecs_cluster_capacity_providers" "capacity_providers" {
  cluster_name       = aws_ecs_cluster.web_server_cluster.name
  capacity_providers = ["FARGATE"]

  default_capacity_provider_strategy {
    base              = 1
    weight            = 100
    capacity_provider = "FARGATE"
  }
}

resource "aws_iam_role" "ecs_task_role" {
  name = "${terraform.workspace}_yz_ecs_task_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "ecs-tasks.amazonaws.com",
        },
      },
    ],
  })
}

resource "aws_iam_role_policy_attachment" "docdb_policy_attachment" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonDocDBFullAccess"
  role       = aws_iam_role.ecs_task_role.name
}

resource "aws_iam_role_policy_attachment" "elasticahe_policy_attachment" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonElastiCacheFullAccess"
  role       = aws_iam_role.ecs_task_role.name
}

resource "aws_iam_role_policy_attachment" "ecs_task_policy_attachment" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
  role       = aws_iam_role.ecs_task_role.name
}

resource "aws_ecs_task_definition" "web_server_task" {
  family                   = "${terraform.workspace}-yz-web-server-task"
  task_role_arn            = aws_iam_role.ecs_task_role.arn
  execution_role_arn       = aws_iam_role.ecs_task_role.arn
  cpu                      = 1024
  memory                   = 2048
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]

  runtime_platform {
    operating_system_family = "LINUX"
    cpu_architecture        = "X86_64"
  }

  container_definitions = jsonencode([
    {
      name   = "${terraform.workspace}-yz-web-server-container"
      image  = var.DOCKER_IMAGE
      cpu    = 1024
      memory = 2048
      portMappings = [
        {
          containerPort = var.DOCKER_PORT,
          protocol      = "tcp",
          appProtocol   = "http"
        }
      ]
      environment = [
        {
          name  = "DATABASE_CONNECTION_URI",
          value = "mongodb://${var.MONGO_USER}:${var.MONGO_PWD}@${aws_docdbelastic_cluster.mongodb_cluster.endpoint}?ssl=true&retryWrites=false"
        },
        {
          name  = "REDIS_HOST",
          value = aws_elasticache_serverless_cache.redis_cluster.endpoint[0].address
        }
      ]
      logConfiguration : {
        logDriver : "awslogs",
        options : {
          awslogs-group : "${aws_cloudwatch_log_group.ecs_log_group.name}",
          awslogs-region : var.AWS_REGION, # Change to your desired AWS region
          awslogs-stream-prefix : "ecs"
        }
      }
    }
  ])
}

resource "aws_cloudwatch_log_group" "ecs_log_group" {
  name              = "/ecs/${terraform.workspace}-yz-web-server-task"
  retention_in_days = 7
}

resource "aws_lb_target_group" "web_server_target_group" {
  name        = "${terraform.workspace}-yz-target-group"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.web_server_vpc.id
  target_type = "ip"

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 5
    interval            = 10
    path                = "/"
    matcher             = "200"
  }
}

resource "aws_ecs_service" "web_server_service" {
  name             = "${terraform.workspace}-yz-web-server-service"
  cluster          = aws_ecs_cluster.web_server_cluster.id
  task_definition  = aws_ecs_task_definition.web_server_task.arn
  platform_version = "LATEST"
  desired_count    = 1

  network_configuration {
    subnets          = [aws_subnet.subnet_a.id, aws_subnet.subnet_b.id, aws_subnet.subnet_c.id]
    security_groups  = [aws_security_group.web_server_sg.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.web_server_target_group.arn
    container_name   = "${terraform.workspace}-yz-web-server-container"
    container_port   = var.DOCKER_PORT
  }

  capacity_provider_strategy {
    capacity_provider = "FARGATE"
    base              = 0
    weight            = 1
  }

  deployment_controller {
    type = "ECS"
  }

  deployment_maximum_percent         = 200
  deployment_minimum_healthy_percent = 100

  lifecycle {
    ignore_changes = [desired_count]
  }

  depends_on = [aws_ecs_task_definition.web_server_task]
}

resource "aws_lb" "web_server_load_balancer" {
  name               = "${terraform.workspace}-yz-load-balancer"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.web_server_sg.id]
  subnets            = [aws_subnet.subnet_a.id, aws_subnet.subnet_b.id, aws_subnet.subnet_c.id]

  tags = {
    Name = "Web server load balancer"
  }
}

resource "aws_lb_listener" "web_server_alb_listener" {
  load_balancer_arn = aws_lb.web_server_load_balancer.arn
  port              = 80
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.web_server_target_group.arn
  }
}

resource "aws_appautoscaling_policy" "ecs_scaling_policy" {
  name               = "ecs-autoscaling-policy"
  service_namespace  = "ecs"
  scalable_dimension = "ecs:service:DesiredCount"
  resource_id        = "service/${aws_ecs_cluster.web_server_cluster.name}/${aws_ecs_service.web_server_service.name}"
  policy_type        = "TargetTrackingScaling"

  target_tracking_scaling_policy_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
    target_value       = 70
    scale_in_cooldown  = 300
    scale_out_cooldown = 300
  }
}

resource "aws_appautoscaling_target" "ecs_scaling_target" {
  max_capacity       = 3
  min_capacity       = 1
  resource_id        = "service/${aws_ecs_cluster.web_server_cluster.name}/${aws_ecs_service.web_server_service.name}"
  service_namespace  = "ecs"
  scalable_dimension = "ecs:service:DesiredCount"
}
