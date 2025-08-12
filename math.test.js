const { factorial, fibonacci } = require('./math.js');

test('factorial de 5 es 120', () => {
  expect(factorial(5)).toBe(120);
});

test('factorial de 0 es 1', () => {
  expect(factorial(0)).toBe(1);
});

test('fibonacci de 7 es 13', () => {
  expect(fibonacci(7)).toBe(13);
});

test('fibonacci de 0 es 0', () => {
  expect(fibonacci(0)).toBe(0);
});
