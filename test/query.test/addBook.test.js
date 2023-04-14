const { Pool } = require('pg');
const connection = require('../../src/database/config/connection');
const { addBookQuery } = require('../../src/database/queries/addBook');

describe('addBookQuery', () => {
  beforeAll(() => {
    return connection.query('CREATE TABLE Books (id SERIAL PRIMARY KEY, author TEXT, title TEXT, picture TEXT, status BOOLEAN)');
  });

  afterAll(() => {
    return connection.query('DROP TABLE Books');
  });

  it('should insert a book record into the database', async () => {
    const result = await addBookQuery('The Great Gatsby', 'http://example.com/gatsby.jpg', 'F. Scott Fitzgerald', true);
    expect(result.rows.length).toBe(1);
    expect(result.rows[0].title).toEqual('The Great Gatsby');
    expect(result.rows[0].picture).toEqual('http://example.com/gatsby.jpg');
    expect(result.rows[0].author).toEqual('F. Scott Fitzgerald');
    expect(result.rows[0].status).toEqual(true);
  });
});
