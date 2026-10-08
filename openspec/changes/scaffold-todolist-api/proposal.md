# Proposal

## Why

`project.md` specifies a NestJS + PostgreSQL todolist API, but the repo has no API code, `package.json` or database setup (only two in-memory example modules). Every planned feature (auth, user management, todolists) needs a runnable service and a persisted data model first, so this change lays that foundation before any feature work.

## What Changes

- Create a NestJS 12 project in an `api/` package targeting Node.js 25.x.
- Add validated environment configuration (extending `.env.sample`) and a PostgreSQL connection.
- Expose a health endpoint that reports service and database status.
- Define the planned entities (User, Role, Permission, RolePermission, TaskList, Task, Circle) and create them through versioned database migrations.
- Seed the two roles, `admin` and `user`.
- Out of scope: authentication, user management, todolist/task endpoints, invitations, permission enforcement.

## Capabilities

### New Capabilities
- `api-runtime`: How the API starts, reads and validates configuration, and reports health.
- `data-schema`: The persisted todolist data model, its constraints and its migrations.

### Modified Capabilities

## Impact

- New `api/` directory with a NestJS app, `package.json` and lockfile.
- New dependencies: NestJS, a PostgreSQL driver and ORM, config validation.
- `.env.sample` gains database and port variables.
- Existing `auth.js` and `user.js` are untouched.
- Requires a local PostgreSQL instance (a `docker-compose.yml` is provided for development).
