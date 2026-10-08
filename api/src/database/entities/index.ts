import { Circle } from './circle.entity.js';
import { Permission } from './permission.entity.js';
import { RolePermission } from './role-permission.entity.js';
import { Role } from './role.entity.js';
import { TaskList } from './task-list.entity.js';
import { Task } from './task.entity.js';
import { User } from './user.entity.js';

export const entities = [
  User,
  Role,
  Permission,
  RolePermission,
  TaskList,
  Task,
  Circle,
];
export { Circle, Permission, Role, RolePermission, Task, TaskList, User };
