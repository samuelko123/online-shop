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

    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }

    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "docker" { }

provider "digitalocean" { }

provider "cloudflare" { }
