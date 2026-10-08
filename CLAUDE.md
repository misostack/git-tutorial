# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## State of the repo

This is a Git workflow tutorial repo that is being used as the base for a spec-driven (OpenSpec) NestJS todolist API. There is **no `package.json`, build, lint or test setup yet**. The only code is two in-memory example modules (`auth.js`, `user.js`) that read `process.env.USER_DATA` (the only variable in `.env.sample`); they are unrelated to the planned API and the scaffold change leaves them untouched.

- `README.md`, `workflows.md`: Git tutorial content (commit convention, rebase, merge mechanics, Gitflow).
- `project.md`: the product spec for the planned API (NestJS 12, Node 25.x, Postgres; roles Admin/User; auth, user management, todolists; data model: User, Role, Permission, RolePermission, TaskList, Task, Circle).
- `openspec.md`, `okf.md`: notes on the OpenSpec and OKF tooling.
- `knowledge/`: Open Knowledge Format (OKF) bundle (overview, tech-stack) describing the project for agents. Use the `okf-open-knowledge-format` skill when editing it; keep `knowledge/index.md` and `log.md` consistent.

## Spec-driven workflow (OpenSpec)

Feature work goes through OpenSpec (`openspec/config.yaml`, schema `spec-driven`). Changes live in `openspec/changes/<name>/` (`proposal.md`, `design.md`, `specs/`, `tasks.md`); main specs in `openspec/specs/`.

- Slash commands / skills: `/opsx:explore`, `/opsx:propose`, `/opsx:apply`, `/opsx:update`, `/opsx:sync`, `/opsx:archive` (definitions in `.claude/commands/opsx` and `.claude/skills/openspec-*`).
- Active change: `scaffold-todolist-api` plans an `api/` NestJS package, validated env config, health endpoint, entities with versioned migrations, and seeded `admin`/`user` roles. Auth, user management, todolist endpoints and permission enforcement are explicitly out of scope there.
- The API code is meant to live in a new `api/` directory, not the repo root.

## Git conventions

- Conventional Commits with the ticket number: `type(scope): #123 description` (e.g. `docs: #20 propose ...`). Branches are `feature/<ticket>-<slug>`.
- Gitflow is described in `workflows.md`: `main` (production) and `develop` both exist; feature branches target `develop`, `release/*` and `hotfix/*` merge into `main`, with `backport/*` branches carrying fixes back. Merges use `--no-ff` via PRs (`gh pr create --base develop ...`).
- `CHANGELOG.md` and `docs/releases/` hold release notes.
