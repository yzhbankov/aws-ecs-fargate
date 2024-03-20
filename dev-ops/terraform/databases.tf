resource "aws_elasticache_subnet_group" "subnet_group" {
  name       = "${terraform.workspace}-yz-redis-subnet-group"
  subnet_ids = [aws_subnet.subnet_a.id, aws_subnet.subnet_b.id, aws_subnet.subnet_c.id] # Change to match your subnet IDs
}

resource "aws_elasticache_cluster" "redis_cluster" {
  cluster_id                 = "${terraform.workspace}-yz-redis-cluster"
  engine                     = "redis"
  engine_version             = "7.1"
  node_type                  = "cache.t2.micro"                    # Change to your desired node type
  num_cache_nodes            = 1                                   # Change to the desired number of cache nodes
  port                       = 6379                                # Redis default port
  parameter_group_name       = "default.redis5.0.cluster.on"       # Adjust if needed
  parameter_group_family     = "redis5.0"                          # Adjust if needed
  security_group_ids         = [aws_security_group.redis_group.id] # Change to your desired security group IDs
  at_rest_encryption_enabled = false                               # Disabling encryption at rest
  transit_encryption_enabled = true                                # Enabling encryption in transit
  snapshot_retention_limit   = 0                                   # Disabling automatic backups
  automatic_failover_enabled = false                               # Disabling automatic failover

  tags = {
    Name = "Web Server Redis Cluster"
  }
}

resource "aws_docdb_cluster" "mongodb_cluster" {
  cluster_identifier      = "${terraform.workspace}-yz-mongodb-cluster"
  engine                  = "docdb"
  master_username         = var.MONGO_USER # Replace with your desired master username
  master_password         = var.MONGO_PWD  # Replace with your desired master password
  backup_retention_period = 7              # Adjust as needed
  preferred_backup_window = "07:00-09:00"  # Adjust as needed
  skip_final_snapshot     = true           # Adjust as needed
  port                    = 27017          # MongoDB default port
  cluster_instance_count  = 1              # Number of instances per shard
  vpc_security_group_ids  = [aws_security_group.mongodb_group.id]
  security_group_ids      = [aws_security_group.redis_group.id] # Change to your desired security group IDs
  subnet_group_name       = aws_elasticache_subnet_group.subnet_group.name
  apply_immediately       = true # Apply changes immediately

  tags = {
    Name = "DocumentDB Cluster"
  }
}

