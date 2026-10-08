## Project Information

Project: API is a nestjs project to manage todolist
Framework : nestjs 12
NodeJS: 25.x
Database: Postgres

## Features

User has 2 types of role:

- Admin
- User

### 1. Authentication

- User can login with email and password
- User can update his/her password

### 2. User Management

- Admin create create new user with email and password
- Admin can manage all users
- Admin can change user's password
- Admin can block a user
- Admin can delete a user

### 3. Todolist Management

- Admin/User can manage their own todolist
- A user can invite another people to access their todolist

## Data Structure

1. User

- id, first name, last name, email, password, status, role_id

2. Role

- id, name(unique)

3. Permission

- id, name(unique), description

4. Role and Permissions

- id, role_id, permission_id

5. TaskList

- id, name

6. Task

- id, title, description, start_date, due_date, status (pending, inprogress, done), task_list_id

7. Circle

- id, user_id, invited_user_id, task_list_id
