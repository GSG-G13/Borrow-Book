const { Pool } = require('pg');
const connection = require('../../src/database/config/connection');
const checkBookStatus = require('../../src/database/queries/checkBookStatus.js');
console.log(checkBookStatus);
describe(' checkBookStatus', () => {
  beforeAll(() => {
    return connection.query('CREATE TABLE RENTS (id SERIAL PRIMARY KEY, book_id INTEGER)');
  });

  afterAll(() => {
    return connection.query('DROP TABLE RENTS');
  });

  it('should return true if the book is rented', async () => {
    await connection.query('INSERT INTO RENTS (book_id) VALUES (123)');
    
    const result = await checkBookStatus(123);
    expect(result.rows.length).toBe(1);
    expect(result.rows[0].book_id).toEqual(123);
  });

  it('should return false if the book is not rented', async () => {
    const result = await checkBookStatus(456);
    expect(result.rows.length).toBe(0);
  });
});
