---
type: Tech Stack
title: Current Codebase
description: The small CommonJS Node.js modules that exist in the repo today.
tags: [tech-stack, nodejs, javascript]
status: stable
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T00:00:00Z }
sources:
  - id: auth
    resource: /auth.js
    title: auth.js
  - id: user
    resource: /user.js
    title: user.js
  - id: env
    resource: /.env.sample
    title: .env.sample
---

# Current Codebase

Plain JavaScript (CommonJS `require`/`module.exports`), no framework and no `package.json`.

- `auth.js` - `authenticateUser(username, password)` matches credentials against an in-memory user list.[^auth]
- `user.js` - in-memory `createUser`, `updateUser`, `deleteUser`, `listUsersWithFilter`.[^user]
- Both modules seed users from the `USER_DATA` environment variable (a JSON array); `.env.sample` sets `USER_DATA=[]`.[^env]

These are tutorial-grade examples: passwords are stored and compared in plain text and nothing is persisted. They do not follow the email-based model in [Project Overview](/overview/project-overview.md) or the [Planned API Stack](/tech-stack/planned-api-stack.md).

[^auth]: auth.js
[^user]: user.js
[^env]: .env.sample
