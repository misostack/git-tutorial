# Tasks

## 1. Project scaffold

- [ ] 1.1 Create the NestJS 12 app in `api/` with `package.json` declaring Node 25.x in `engines`; verify `npm run build` and `npm test` succeed
- [ ] 1.2 Add `docker-compose.yml` with PostgreSQL and extend `.env.sample` with port and database variables; verify `docker compose up -d` makes the database accept connections
- [ ] 1.3 Document setup and run commands in `api/README.md`; verify the documented commands work from a clean checkout

## 2. Configuration and health

- [ ] 2.1 Add validated configuration module for the required variables; verify a unit test covers valid and missing-variable cases (service exits non-zero naming the variable)
- [ ] 2.2 Connect to PostgreSQL through the ORM using that configuration; verify the app boots against the compose database
- [ ] 2.3 Add `GET /health` with a database indicator; verify an e2e test gets 200 when the database is up and 503 when it is stopped

## 3. Data schema

- [ ] 3.1 Define entities for User, Role, Permission, RolePermission, TaskList, Task and Circle with fields from `project.md`, unique and foreign-key constraints, and the task status restriction; verify they compile and a test inspects the metadata
- [ ] 3.2 Generate the initial migration and add migration run/revert scripts; verify running on an empty database creates all seven tables and a second run changes nothing
- [ ] 3.3 Add an integration test for constraints (duplicate role name, missing task_list_id, invalid status, default status); verify it passes against PostgreSQL
- [ ] 3.4 Add an idempotent seed script for roles `admin` and `user`; verify running it twice leaves exactly two roles
- [ ] 3.5 Document the entities and migration/seed commands in `api/README.md`; verify the commands run as written

## 4. Integration check

- [ ] 4.1 From a clean database run migrate, seed, start and `GET /health`; verify the full sequence succeeds and `openspec validate scaffold-todolist-api` passes

## Workflow follow-up

- Confirm the ORM and UUID-key assumptions in design.md before applying.
- Archive the change after review with `/opsx:archive`.
