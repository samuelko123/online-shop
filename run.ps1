#!pwsh
param(
  [Parameter(Position = 0, Mandatory = $true)]
  [ValidateSet("dev", "prod", "e2e", "stop", "uninstall")]
  [string]$profile
)

function RunCommand([string]$command) {
  Write-Host "Running the following command:"
  Write-Host $command
  Invoke-Expression $command
}

$compose = "docker compose --file ./infra/docker/docker-compose.yaml"
switch ($profile) {
  "dev" {
    $compose += " --file ./infra/docker/docker-compose.dev.yaml"
    RunCommand("$compose down --rmi all --remove-orphans")
    RunCommand("$compose up --build --detach")
  }
  "prod" {
    RunCommand("$compose down --rmi all --remove-orphans")
    RunCommand("$compose build web")
    RunCommand("$compose build app")
    RunCommand("$compose up --detach")
  }
  "e2e" {
    $compose += " --file ./infra/docker/docker-compose.e2e.yaml"
    RunCommand("$compose down --rmi all --remove-orphans")
    RunCommand("$compose build web")
    RunCommand("$compose up e2e --build")
  }
  "stop" {
    RunCommand("$compose stop")
  }
  "uninstall" {
    RunCommand("$compose down --rmi all --remove-orphans --volume")
  }
}
