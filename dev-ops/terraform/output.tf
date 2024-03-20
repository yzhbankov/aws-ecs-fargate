output "aws_region" {
  value = var.AWS_REGION
}

output "redis_connection_string" {
  value = aws_elasticache_serverless_cache.redis_cluster.endpoint
}

output "mongodb_connection_string" {
  value = "mongodb://${var.MONGO_USER}:${var.MONGO_PWD}@${aws_docdbelastic_cluster.mongodb_cluster.endpoint}?ssl=true&retryWrites=false"
}
