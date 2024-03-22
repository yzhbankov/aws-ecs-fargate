resource "aws_elasticache_serverless_cache" "redis_cluster" {
  engine                   = "redis"
  name                     = "${terraform.workspace}-yz-redis-cluster"
  daily_snapshot_time      = "09:00"
  description              = "Redis Cache Server"
  major_engine_version     = "7"
  snapshot_retention_limit = 1
  security_group_ids       = [aws_security_group.redis_sg.id]
  subnet_ids               = [aws_subnet.subnet_a.id, aws_subnet.subnet_b.id, aws_subnet.subnet_c.id]
}

resource "aws_docdbelastic_cluster" "mongodb_cluster" {
  name                   = "${terraform.workspace}-yz-mongodb-cluster"
  admin_user_name        = var.MONGO_USER
  admin_user_password    = var.MONGO_PWD
  auth_type              = "PLAIN_TEXT"
  shard_capacity         = 2
  shard_count            = 1
  subnet_ids             = [aws_subnet.subnet_a.id, aws_subnet.subnet_b.id, aws_subnet.subnet_c.id]
  vpc_security_group_ids = [aws_security_group.mongodb_sg.id]
}

