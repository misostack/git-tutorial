import { DataSource } from 'typeorm';
import { validateEnv } from '../src/config/env.js';
import { buildDataSourceOptions } from '../src/database/typeorm-options.js';
import { Role, Task, TaskList, User } from '../src/database/entities/index.js';
import { seedRoles } from '../src/database/seed.js';

describe('data schema (integration)', () => {
  let ds: DataSource;

  beforeAll(async () => {
    ds = new DataSource(buildDataSourceOptions(validateEnv(process.env)));
    await ds.initialize();
    await ds.runMigrations();
  });

  afterAll(async () => {
    await ds.destroy();
  });

  beforeEach(async () => {
    await ds.query(
      'TRUNCATE tasks, task_lists, circles, role_permissions, users, roles, permissions CASCADE',
    );
  });

  it('declares all seven entities', () => {
    const names = ds.entityMetadatas.map((m) => m.tableName).sort();
    expect(names).toEqual([
      'circles',
      'permissions',
      'role_permissions',
      'roles',
      'task_lists',
      'tasks',
      'users',
    ]);
  });

  it('rejects a duplicate role name', async () => {
    await ds.getRepository(Role).insert({ name: 'admin' });
    await expect(ds.getRepository(Role).insert({ name: 'admin' })).rejects.toThrow(
      /unique|duplicate/i,
    );
  });

  it('rejects a duplicate user email', async () => {
    const [role] = (await ds.getRepository(Role).insert({ name: 'user' })).identifiers;
    const row = { firstName: 'A', lastName: 'B', email: 'a@b.c', password: 'x', status: 'active', role };
    await ds.getRepository(User).insert(row);
    await expect(ds.getRepository(User).insert(row)).rejects.toThrow(/unique|duplicate/i);
  });

  it('rejects a task for a missing task list', async () => {
    await expect(
      ds.query(
        `INSERT INTO tasks (title, task_list_id) VALUES ('t', '00000000-0000-0000-0000-000000000000')`,
      ),
    ).rejects.toThrow(/foreign key/i);
  });

  it('rejects an invalid task status and defaults to pending', async () => {
    const [list] = (await ds.getRepository(TaskList).insert({ name: 'l' })).identifiers;
    await expect(
      ds.query(`INSERT INTO tasks (title, status, task_list_id) VALUES ('t', 'archived', $1)`, [list.id]),
    ).rejects.toThrow(/enum|invalid input/i);
    const { identifiers } = await ds.getRepository(Task).insert({ title: 't', taskList: list });
    const task = await ds.getRepository(Task).findOneByOrFail({ id: identifiers[0].id });
    expect(task.status).toBe('pending');
  });

  it('seeds roles idempotently', async () => {
    await seedRoles(ds);
    await seedRoles(ds);
    const names = (await ds.getRepository(Role).find()).map((r) => r.name).sort();
    expect(names).toEqual(['admin', 'user']);
  });
});
