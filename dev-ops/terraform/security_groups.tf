resource "aws_security_group" "mongodb_sg" {
  name        = "${terraform.workspace}-yz-mongodb-group"
  description = "Security group for MongoDB"
  vpc_id      = aws_vpc.web_server_vpc.id

  ingress {
    from_port   = var.MONGO_PORT
    to_port     = var.MONGO_PORT
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.web_server_vpc.cidr_block]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "redis_sg" {
  name        = "${terraform.workspace}-yz-redis-group"
  description = "Security group for Redis"
  vpc_id      = aws_vpc.web_server_vpc.id

  ingress {
    from_port   = var.REDIS_PORT
    to_port     = var.REDIS_PORT
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.web_server_vpc.cidr_block]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "web_server_sg" {
  name        = "${terraform.workspace}-yz-web-server-group"
  description = "Security group for web servers"
  vpc_id      = aws_vpc.web_server_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = var.DOCKER_PORT
    to_port     = var.DOCKER_PORT
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.web_server_vpc.cidr_block]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
