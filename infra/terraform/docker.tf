resource "docker_hub_repository" "app" {
  namespace   = "samuelko123"
  name        = "online-shop-app"
  description = "It is a hobbyist project"
  private     = false
}
