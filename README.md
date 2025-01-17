# Online Shop

It is a hobbyist project.

The aim is to build a minimalistic and production-ready online shop.

## Features
- Landing Page
- Product Listing Page

## Technologies
- DevOps
  - Docker
  - Github Workflow
  - Terraform
  - Webhook
  - Powershell
- Backend
  - ASP.NET
- Frontend
  - Typescript
  - React
  - React Router
  - Vite
  - ESLint
  - CSS Modules
- Testing
  - Playwright

## How to Run

| Command               | Description                                                                             |
| ----------------------| --------------------------------------------------------------------------------------- |
| `./run.ps1 dev`       | Start Docker containers in development mode, with Hot Module Replacement enabled.       |
| `./run.ps1 prod`      | Start Docker containers in production mode.                                             |
| `./run.ps1 e2e`       | Start Docker containers in production mode and run end-to-end testing.                  |
| `./run.ps1 stop`      | Stop Docker containers.                                                                 |
| `./run.ps1 uninstall` | Remove all Docker resources related to this project.                                    |

Both `dev` and `prod` are hosted on http://localhost:5000.

## More Documentations

- [DevOps Infrastructure](./infra/README.md)
