# Spec Delta

## Purpose

Defines the persisted data model of the todolist API and how it is created and evolved, so that later features can rely on a stable schema.

## ADDED Requirements

### Requirement: Core entities persisted
The system SHALL persist User, Role, Permission, RolePermission, TaskList, Task and Circle records with the fields listed in `project.md`.

#### Scenario: Migrations on empty database
- **WHEN** migrations are run against an empty database
- **THEN** tables for all seven entities exist with the specified columns

#### Scenario: Migrations are repeatable
- **WHEN** migrations are run again on an up-to-date database
- **THEN** no change is made and the command succeeds

### Requirement: Uniqueness and referential integrity
The system SHALL enforce unique role names, unique permission names and unique user emails, and SHALL reject records whose foreign keys do not exist.

#### Scenario: Duplicate role name
- **WHEN** a second role with an existing name is inserted
- **THEN** the database rejects it with a unique-constraint violation

#### Scenario: Task for missing task list
- **WHEN** a task is inserted with a `task_list_id` that does not exist
- **THEN** the database rejects it with a foreign-key violation

### Requirement: Task status values
The system SHALL restrict task status to `pending`, `inprogress` or `done`, defaulting to `pending`.

#### Scenario: Invalid status
- **WHEN** a task is inserted with status `archived`
- **THEN** the database rejects it

#### Scenario: Default status
- **WHEN** a task is inserted without a status
- **THEN** its status is `pending`

### Requirement: Default roles seeded
The system SHALL provide the roles `admin` and `user` after seeding, without duplicating them on repeated runs.

#### Scenario: Seed twice
- **WHEN** the seed command is run twice
- **THEN** exactly one `admin` role and one `user` role exist
