output "aws_region" {
  value = var.AWS_REGION
}

output "redis_connection_address" {
  value = aws_elasticache_serverless_cache.redis_cluster.endpoint[0].address
}

output "redis_connection_port" {
  value = aws_elasticache_serverless_cache.redis_cluster.endpoint[0].port
}

output "mongodb_connection_string" {
  value = "mongodb://${var.MONGO_USER}:${var.MONGO_PWD}@${aws_docdbelastic_cluster.mongodb_cluster.endpoint}?ssl=true&retryWrites=false"
}

output "alb_public_url" {
  value = "http://${aws_lb.web_server_load_balancer.dns_name}"
}
