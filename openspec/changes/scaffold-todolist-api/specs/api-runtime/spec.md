# Spec Delta

## Purpose

Defines how the todolist API starts up, loads its configuration and reports its own health, so that operators can run and monitor the service.

## ADDED Requirements

### Requirement: Configuration validated at startup
The system SHALL read its configuration from environment variables and refuse to start when a required variable is missing or invalid.

#### Scenario: Valid configuration
- **WHEN** all required variables (port, database host, port, name, user, password) are set to valid values
- **THEN** the service starts and listens on the configured port

#### Scenario: Missing database variable
- **WHEN** a required database variable is not set
- **THEN** the service exits with a non-zero status and an error naming the missing variable

### Requirement: Health endpoint
The system SHALL expose `GET /health` that reports whether the service and its database are reachable.

#### Scenario: Database reachable
- **WHEN** a client requests `GET /health` and the database accepts connections
- **THEN** the response is HTTP 200 with status `ok`

#### Scenario: Database unreachable
- **WHEN** a client requests `GET /health` and the database cannot be reached
- **THEN** the response is HTTP 503 with status `error` identifying the database

### Requirement: Supported runtime
The system SHALL run on Node.js 25.x with PostgreSQL as its only datastore.

#### Scenario: Unsupported Node.js version
- **WHEN** the project is installed under a Node.js version outside 25.x
- **THEN** the package manager warns or fails according to the declared engine constraint
