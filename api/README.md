# Todolist API

NestJS 12 API for the todolist project (see `../project.md`). Requires Node.js 25.x and Docker.

## Setup

```sh
cp ../.env.sample .env        # database and port settings
docker compose -f ../docker-compose.yml up -d --wait
npm install
```

## Run

```sh
npm run build
npm run migration:run         # create / update the schema
npm run seed                  # insert the admin and user roles (idempotent)
npm run start:prod            # listens on $PORT
curl localhost:3000/health    # 200 {"status":"ok",...} when the database is up
```

Missing or invalid environment variables make the service exit with a non-zero status naming the variable.

## Tests

```sh
npm test                      # unit tests
set -a; . ./.env; set +a
npm run test:e2e              # health and schema tests; need the compose database running
```

## Data model

Entities live in `src/database/entities/` and map to the tables `users`, `roles`, `permissions`, `role_permissions`, `task_lists`, `tasks` and `circles`. Primary keys are UUIDs. `roles.name`, `permissions.name` and `users.email` are unique; `tasks.status` is an enum (`pending`, `inprogress`, `done`, default `pending`).

The schema is managed only through migrations (`synchronize` is off):

```sh
npm run migration:generate    # diff entities against the database into src/database/migrations
npm run migration:run
npm run migration:revert      # revert the last migration
npm run seed
```
