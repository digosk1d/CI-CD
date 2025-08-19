const { calcularNotaPonderada, percentil } = require('./notas');

test('nota ponderada ok', () => {
  expect(calcularNotaPonderada([{ nota: 80, peso: 0.4 }, { nota: 90, peso: 0.6 }])).toBe(86.00);
});

test('percentil 0 es minimo', () => {
  expect(percentil(0, [1, 2, 3])).toBe(1.00);
});

test('percentil 100 es maximo', () => {
  expect(percentil(100, [1, 2, 3])).toBe(3.00);
});

test('percentil 50 en lista par', () => {
  expect(percentil(50, [1, 2, 3, 4])).toBe(2.00);
});