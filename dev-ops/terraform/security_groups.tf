resource "aws_security_group" "mongodb_group" {
  name        = "${terraform.workspace}-yz-mongodb-group"
  description = "Security group for MongoDB"
  vpc_id      = aws_vpc.web_server_vpc.id

  ingress {
    from_port   = 27017
    to_port     = 27017
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.web_server_vpc.cidr_block]
  }
}

resource "aws_security_group" "redis_group" {
  name        = "${terraform.workspace}-yz-redis-group"
  description = "Security group for Redis"
  vpc_id      = aws_vpc.web_server_vpc.id

  ingress {
    from_port   = 6379
    to_port     = 6379
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.web_server_vpc.cidr_block]
  }
}

resource "aws_security_group" "web_server_group" {
  name        = "${terraform.workspace}-yz-web-server-group"
  description = "Security group for web servers"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
