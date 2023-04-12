const { Pool } = require('pg');
const connection = require('../../src/database/config/connection');
const { addUser } = require('../../src/database/queries/addUser');
describe('addUser function', () => {
  beforeAll((done) => {
    connection.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role VARCHAR(255) NOT NULL)')
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  afterAll((done) => {
    connection.query('DROP TABLE IF EXISTS users')
      .then(() => {
        connection.end();
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should insert a new user into the users table', async () => {
    const user = {
      userName: 'shatha.amin',
      firstName: 'shatha',
      lastName: 'amin',
      email: 'shatha.amin@example.com',
      password: 'password',
      role: 'user',
    };

    const { rows } = await addUser(user);

    expect(rows[0].username).toBe(user.userName);
    expect(rows[0].firstname).toBe(user.firstName);
    expect(rows[0].lastname).toBe(user.lastName);
    expect(rows[0].email).toBe(user.email);
    expect(rows[0].password).toBe(user.password);
    expect(rows[0].role).toBe(user.role);
  });
});
