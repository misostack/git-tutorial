---
type: Tool
title: OpenSpec
description: Spec-driven development framework installed for AI coding assistants in this repo.
tags: [tech-stack, tooling, spec-driven]
status: stable
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T00:00:00Z }
sources:
  - id: openspec-md
    resource: /openspec.md
    title: openspec.md
  - id: config
    resource: /openspec/config.yaml
    title: openspec/config.yaml
---

# OpenSpec

Spec-driven development (SDD) for AI coding assistants; installed with `npm install -g @fission-ai/openspec@latest` and set up with `openspec init`.[^openspec-md]

Schema is `spec-driven` in `openspec/config.yaml`, with no project context or rules configured yet.[^config] Changes live in `openspec/changes/`, main specs in `openspec/specs/`.

| Command | Purpose |
|---------|---------|
| `/opsx:explore` | Map the problem and understand the codebase |
| `/opsx:propose` | Draft proposal.md, specs/, design.md, tasks.md |
| `/opsx:apply` | Implement tasks from the spec |
| `/opsx:verify` | Check the implementation matches the spec |
| `/opsx:archive` | Archive completed changes |

Skills and commands are installed under `.claude/`. It would be the natural way to turn [Project Overview](/overview/project-overview.md) into an implementation.

[^openspec-md]: openspec.md
[^config]: openspec/config.yaml
