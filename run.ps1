#!pwsh
param(
  [Parameter(Position = 0, Mandatory = $true)]
  [ValidateSet("prod", "stop", "uninstall")]
  [string]$profile
)

function RunCommand([string]$command) {
  Write-Host "Running the following command:"
  Write-Host $command
  Invoke-Expression $command
}

$compose = "docker compose --file ./infra/docker/docker-compose.yaml"
switch ($profile) {
  "prod" {
    RunCommand("$compose down --rmi all --remove-orphans")
    RunCommand("$compose build web")
    RunCommand("$compose build app")
    RunCommand("$compose up --detach")
  }
  "stop" {
    RunCommand("$compose stop")
  }
  "uninstall" {
    RunCommand("$compose down --rmi all --remove-orphans --volume")
  }
}