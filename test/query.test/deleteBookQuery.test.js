const { Pool } = require('pg');
const connection = require('../../src/database/config/connection');
const { deleteBookQuery } = require('../../src/database/queries/deleteBookQuery');

describe('deleteBookQuery', () => {
  beforeAll(() => {
    return connection.query('CREATE TABLE books (id SERIAL PRIMARY KEY, title TEXT, picture TEXT, author TEXT, status BOOLEAN)');
  });

  afterAll(() => {
    return connection.query('DROP TABLE books');
  });

  it('should delete a book record from the database', async () => {
    const insertResult = await connection.query("INSERT INTO books (title, picture, author, status) VALUES ('Test Book', 'http://example.com/book.jpg', 'Test Author', true) RETURNING id");

    const deleteResult = await deleteBookQuery(insertResult.rows[0].id);
    expect(deleteResult.rows.length).toBe(1);
    expect(deleteResult.rows[0].title).toEqual('Test Book');
    expect(deleteResult.rows[0].picture).toEqual('http://example.com/book.jpg');
    expect(deleteResult.rows[0].author).toEqual('Test Author');
    expect(deleteResult.rows[0].status).toEqual(true);

    const queryResult = await connection.query('SELECT * FROM books WHERE id = $1', [insertResult.rows[0].id]);
    expect(queryResult.rows.length).toBe(0);
  });
});
