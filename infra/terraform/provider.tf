terraform {
  cloud {
    organization = "samuelko123"
    workspaces {
      name = "online-shop"
    }
  }

  required_providers {
    docker = {
      source  = "docker/docker"
      version = "=0.3.1"
    }
  }
}

provider "docker" { }
