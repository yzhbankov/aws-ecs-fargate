resource "aws_vpc" "web_server_vpc" {
  cidr_block = "20.0.0.0/16"
}

resource "aws_subnet" "subnet_a" {
  vpc_id            = aws_vpc.web_server_vpc.id
  cidr_block        = "20.0.1.0/24"
  availability_zone = "us-east-1a" # Change to your desired AZ
}

resource "aws_subnet" "subnet_b" {
  vpc_id            = aws_vpc.web_server_vpc.id
  cidr_block        = "20.0.2.0/24"
  availability_zone = "us-east-1b" # Change to your desired AZ
}

resource "aws_subnet" "subnet_c" {
  vpc_id            = aws_vpc.web_server_vpc.id
  cidr_block        = "20.0.3.0/24"
  availability_zone = "us-east-1c" # Change to your desired AZ
}
