const { toCelsius, toFahrenheit, movingAverage } = require('./src/utils/conversions');

test('32°F to 0°C', () => {
  expect(toCelsius(32)).toBe(0);
});

test('0°C to 32°F', () => {
  expect(toFahrenheit(0)).toBe(32);
});

test('movingAverage([10,20,30], 2) → [15, 25]', () => {
  expect(movingAverage([10, 20, 30], 2)).toEqual([15, 25]);
});

test('error si no es número', () => {
  expect(() => toCelsius('a')).toThrow();
});
