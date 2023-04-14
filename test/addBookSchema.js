const { addBookSchema } = require('../src/utiles/validation/addBookSchema');

test('Valid add book schema', () => {
  const validData = {
    author: 'shatha amin',
    image: 'https://example.com/book.jpg',
    bookName: ' Book',
  };
  const result = addBookSchema.validate(validData);
  expect(result.error).toBeUndefined();
});

test('Invalid add book schema - missing author', () => {
  const invalidData = {
    image: 'https://example.com/book.jpg',
    bookName: ' Book',
  };
  const result = addBookSchema.validate(invalidData);
  expect(result.error).toBeDefined();
});

test('Invalid add book schema - invalid author', () => {
  const invalidData = {
    author: 's',
    image: 'https://example.com/book.jpg',
    bookName: ' Book',
  };
  const result = addBookSchema.validate(invalidData);
  expect(result.error).toBeDefined();
});
