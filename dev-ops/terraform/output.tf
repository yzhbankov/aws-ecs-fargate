output "aws_region" {
  value = var.AWS_REGION
}

output "redis_connection_string" {
  value = "${aws_elasticache_cluster.redis_cluster.cache_nodes.0.address}:${aws_elasticache_cluster.redis_cluster.port}"
}

#output "mongodb_connection_string" {
#  value = "mongodb://${aws_docdbelastic_cluster.mongodb_cluster.connection}"
#}
