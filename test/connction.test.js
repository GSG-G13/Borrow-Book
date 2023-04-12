const { Pool } = require('pg');
const connection = require('../src/database/config/connection');

describe('connection', () => {
  it('should return a valid connection object', () => {
    expect(connection).toBeInstanceOf(Pool);
    expect(connection).toHaveProperty('query');
    expect(connection).toHaveProperty('connect');
    expect(connection).toHaveProperty('end');
  });
});
