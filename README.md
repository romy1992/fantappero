# FantAppero

FantAppero is an MVP monorepo for an advanced fantasy football platform, built for web and mobile clients with a FastAPI backend.

## Structure

```text
fantappero/
├── apps/
│   ├── web/
│   └── mobile/
├── backend/
├── packages/
│   ├── shared/
│   └── api-client/
├── data/
├── docker-compose.yml
└── README.md
```

## Requirements

- Node.js 20+
- pnpm 9+
- Python 3.12+
- Docker and Docker Compose

## Setup

```bash
pnpm install
```

Create the backend environment when running the API locally:

```bash
cd backend
python -m venv .venv
pip install -e ".[dev]"
```

## Scripts

```bash
pnpm dev:web
pnpm dev:mobile
pnpm dev:backend
pnpm db:up
pnpm docker:up
```

- `pnpm dev:web` starts the Vite app on `http://localhost:5173`.
- `pnpm dev:mobile` starts Expo.
- `pnpm dev:backend` starts FastAPI on `http://localhost:8000`.
- `pnpm db:up` starts PostgreSQL only.
- `pnpm docker:up` starts PostgreSQL and the backend.

## Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
fastapi dev app/main.py
```

On Windows PowerShell:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -e ".[dev]"
fastapi dev app/main.py
```

## Docker

```bash
docker compose up --build
```

The API is exposed at `http://localhost:8000`.

## Packages

- `packages/shared`: shared types, constants, and pure fantasy helpers.
- `packages/api-client`: shared HTTP client for web and mobile.

## MVP Notes

The initial domain keeps lineups attached to a fantasy round. Individual player locks should be calculated from each player's real match kickoff inside that fantasy round, instead of linking the whole lineup to one real match.
