resource "cloudflare_record" "online-shop" {
  zone_id = var.CLOUDFLARE_ZONE_ID
  name    = "online-shop"
  type    = "A"
  content = digitalocean_droplet.online-shop-droplet.ipv4_address
  proxied = true
  ttl     = 1
}
