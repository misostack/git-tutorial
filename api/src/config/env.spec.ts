import { validateEnv } from './env.js';

const valid = {
  PORT: '3000',
  DB_HOST: 'localhost',
  DB_PORT: '5432',
  DB_NAME: 'todolist',
  DB_USER: 'todolist',
  DB_PASSWORD: 'todolist',
};

describe('validateEnv', () => {
  it('accepts a complete configuration and coerces numbers', () => {
    expect(validateEnv(valid)).toEqual({
      ...valid,
      PORT: 3000,
      DB_PORT: 5432,
    });
  });

  it('names the missing variable', () => {
    const { DB_HOST: _omitted, ...rest } = valid;
    expect(() => validateEnv(rest)).toThrow(/DB_HOST/);
  });

  it('rejects a non-numeric port', () => {
    expect(() => validateEnv({ ...valid, DB_PORT: 'abc' })).toThrow(/DB_PORT/);
  });
});
