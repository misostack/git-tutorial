---
type: Data Model
title: Todolist Domain Model
description: Planned entities and fields of the todolist API, as specified in project.md.
tags: [overview, data-model, planned]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T00:00:00Z }
sources:
  - id: project
    resource: /project.md
    title: project.md
---

# Todolist Domain Model

Planned entities for the API described in [Project Overview](/overview/project-overview.md), stored in PostgreSQL.[^project]

# Schema

| Entity | Fields | Notes |
|--------|--------|-------|
| User | id, first name, last name, email, password, status, role_id | |
| Role | id, name | name is unique |
| Permission | id, name, description | name is unique |
| Role and Permissions | id, role_id, permission_id | join of Role and Permission |
| TaskList | id, name | |
| Task | id, title, description, start_date, due_date, status, task_list_id | status: pending, inprogress, done |
| Circle | id, user_id, invited_user_id, task_list_id | records a user inviting another to a task list |

[^project]: project.md
