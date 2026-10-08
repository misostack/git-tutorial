import type { DataSource } from "typeorm";
import dataSource from './data-source.js';
import { Role } from './entities/index.js';

export const DEFAULT_ROLES = ['admin', 'user'];

export async function seedRoles(ds: DataSource): Promise<void> {
  await ds
    .createQueryBuilder()
    .insert()
    .into(Role)
    .values(DEFAULT_ROLES.map((name) => ({ name })))
    .orIgnore()
    .execute();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await dataSource.initialize();
  try {
    await seedRoles(dataSource);
    console.log(`Seeded roles: ${DEFAULT_ROLES.join(', ')}`);
  } finally {
    await dataSource.destroy();
  }
}
