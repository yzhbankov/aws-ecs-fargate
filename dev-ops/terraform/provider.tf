terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.40"
    }
  }
  backend "s3" {
    bucket = "amazon-ecs-terraform-state"
    key    = "terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.AWS_REGION
}
