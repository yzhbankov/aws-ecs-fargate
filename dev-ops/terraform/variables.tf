variable "AWS_REGION" {
  default = "us-east-1"
}

variable "MONGO_USER" {
  default = "mongouser"
}

variable "MONGO_PWD" {
  default = "mongopassword"
}

variable "DOCKER_IMAGE" {
  default = "yzhbankov/web-server:latest"
}
