---
type: Process
title: Git Workflow and Conventions
description: Gitflow branching, Conventional Commits, Keep a Changelog and GitHub CLI usage in this repo.
tags: [tech-stack, git, gitflow, conventions]
status: stable
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T00:00:00Z }
sources:
  - id: workflows
    resource: /workflows.md
    title: workflows.md
  - id: readme
    resource: /README.md
    title: README.md
  - id: changelog
    resource: /CHANGELOG.md
    title: CHANGELOG.md
---

# Git Workflow and Conventions

## Branching (Gitflow)

Long-lived branches: `main` (production) and `develop` (integration). Supporting branches:[^workflows]

| Prefix | Branches from | Merges into |
|--------|---------------|-------------|
| `feature/` (or `feat/`) | develop | develop |
| `release/` | develop | main (tagged) and develop |
| `hotfix/` | main | main (tagged) and develop |
| `bugfix/` / `fix/`, `support/`, `chore/`, `refactor/` | per naming convention | - |

## Commits

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/): `<type>[scope]: <description>`. `fix` maps to PATCH, `feat` to MINOR, `BREAKING CHANGE` to MAJOR. Examples in the repo include a ticket number, e.g. `feat(api): #123 ...`.[^readme]

## Changelog and releases

`CHANGELOG.md` follows Keep a Changelog; release notes live in `docs/releases/`.[^changelog] Releases and PRs are created with the GitHub CLI (`gh pr create`, `gh release create`).

The planned work is specified with [OpenSpec](/tech-stack/openspec.md).

[^workflows]: workflows.md
[^readme]: README.md
[^changelog]: CHANGELOG.md
