// addFive.test.js

const addFive = require('./addFive');

test('returns the value plus 5', () => {
  expect(addFive(1)).toBe(6);
});
