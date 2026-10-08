---
type: Project
title: git-tutorial Project Overview
description: A Git tutorial repository that also holds the spec for a planned NestJS todolist API.
tags: [overview, git, todolist]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T00:00:00Z }
sources:
  - id: readme
    resource: /README.md
    title: README.md
  - id: project
    resource: /project.md
    title: project.md
---

# git-tutorial Project Overview

The repository is a **Git tutorial**: it documents a commit convention, rebase, merge mechanics (fast-forward, no-ff, squash) and a Gitflow workflow.[^readme] See [Git Workflow and Conventions](/tech-stack/git-workflow.md).

It also carries `project.md`, a specification for a **todolist management API** built with NestJS and PostgreSQL.[^project] That API is not yet implemented in this repo; see [Planned API Stack](/tech-stack/planned-api-stack.md) and [Current Codebase](/tech-stack/current-codebase.md).

## Planned features

Two roles exist: **Admin** and **User**.[^project]

1. **Authentication** - login with email and password; users can update their password.
2. **User management** - admins create users (email and password), manage all users, change passwords, block and delete users.
3. **Todolist management** - admins and users manage their own todolists; a user can invite other people to access their todolist.

Entities are described in [Domain Model](/overview/domain-model.md).

## Release state

Version 1.0.0 was released on 2026-10-08 per `CHANGELOG.md`, covering secure access, a Gitflow doc and admin user management entries.

[^readme]: README.md
[^project]: project.md
