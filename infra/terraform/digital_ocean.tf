resource "digitalocean_ssh_key" "online-shop-ssh-key" {
  name       = "online-shop-ssh-key"
  public_key = file("digital_ocean_id_rsa.pub")
}

resource "digitalocean_droplet" "online-shop-droplet" {
  image     = "ubuntu-24-10-x64"
  name      = "online-shop-droplet"
  region    = "syd1"
  size      = "s-1vcpu-512mb-10gb"
  backups   = false
  ssh_keys  = [digitalocean_ssh_key.online-shop-ssh-key.fingerprint]
  user_data = file("digital_ocean_droplet_init.yaml")
}
