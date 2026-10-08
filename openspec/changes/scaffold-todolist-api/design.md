# Design

## Context

The repo currently contains tutorial docs and two in-memory JS modules; there is no Node project definition. `project.md` fixes NestJS 12, Node 25.x and PostgreSQL. See proposal.md for motivation.

## Goals / Non-Goals

**Goals:**
- A runnable, testable NestJS app with a reproducible local database.
- A schema managed only through migrations.

**Non-Goals:**
- Business endpoints, authentication and password hashing, authorization against the Permission tables.
- Production deployment and CI.

## Decisions

- **Location `api/`**: matches the "Impacted packages: api" convention in `workflows.md` and keeps the legacy root `auth.js`/`user.js` separate. Alternative: repo root, rejected as it would mix with tutorial files.
- **ORM: TypeORM with `@nestjs/typeorm`**: first-class Nest integration and migration CLI. Alternatives: Prisma (own schema language and client generation), MikroORM; either is viable if preferred, but this is an assumption to confirm.
- **Config: `@nestjs/config` with schema validation** (fail fast at boot, as required by the api-runtime spec).
- **Health: `@nestjs/terminus`** with a database indicator, giving the 200/503 behavior directly.
- **Schema via migrations only**: `synchronize` is disabled so the schema is reviewable and repeatable.
- **Task status as a PostgreSQL enum / check constraint**, default `pending`.
- **Primary keys as UUIDs** to avoid exposing sequential ids. `project.md` only says `id`; this is an assumption.
- **Local DB via `docker-compose.yml`** (PostgreSQL) so setup is one command.
- **Seeding as an idempotent script** (insert-if-absent by role name).
- **Tests**: Jest unit tests for config validation; an e2e test for `/health` and a migration test against a real PostgreSQL.

## Risks / Trade-offs

- [NestJS 12 and Node 25 are new and may lack plugin support] → verify package compatibility at install; pin versions in the lockfile.
- [ORM choice is an assumption] → isolated in the data layer; confirm before applying.
- [Password column exists before hashing is designed] → store only a hash field name and add no write path in this change.
