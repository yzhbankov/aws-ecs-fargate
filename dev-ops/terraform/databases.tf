resource "aws_elasticache_subnet_group" "subnet_group" {
  name       = "${terraform.workspace}-yz-redis-subnet-group"
  subnet_ids = [aws_subnet.subnet_a.id, aws_subnet.subnet_b.id, aws_subnet.subnet_c.id] # Change to match your subnet IDs
}

resource "aws_docdb_subnet_group" "docdb_subnet_group" {
  name       = "${terraform.workspace}-yz-docdb-subnet-group"
  subnet_ids = [aws_subnet.subnet_a.id, aws_subnet.subnet_b.id, aws_subnet.subnet_c.id] # Change to match your subnet IDs
}

resource "aws_elasticache_parameter_group" "redis_parameter_group" {
  name        = "redis7-parameter-group"
  family      = "redis7"
  description = "Parameter group for Redis version 7"
}

resource "aws_elasticache_cluster" "redis_cluster" {
  cluster_id               = "${terraform.workspace}-yz-redis-cluster"
  engine                   = "redis"
  engine_version           = "7.1"
  node_type                = "cache.t2.micro" # Change to your desired node type
  num_cache_nodes          = 1                # Change to the desired number of cache nodes
  port                     = 6379             # Redis default port
  parameter_group_name     = aws_elasticache_parameter_group.redis_parameter_group.name
  security_group_ids       = [aws_security_group.redis_group.id] # Change to your desired security group IDs
  snapshot_retention_limit = 0                                   # Disabling automatic backups

  tags = {
    Name = "Web Server Redis Cluster"
  }
}

resource "aws_docdbelastic_cluster" "mongodb_cluster" {
  name                   = "${terraform.workspace}-yz-mongodb-cluster"
  admin_user_name        = var.MONGO_USER
  admin_user_password    = var.MONGO_PWD
  auth_type              = "PLAIN_TEXT"
  shard_capacity         = 2
  shard_count            = 1
  subnet_ids             = [aws_subnet.subnet_a.id, aws_subnet.subnet_b.id, aws_subnet.subnet_c.id]
  vpc_security_group_ids = [aws_security_group.mongodb_group.id]
}

