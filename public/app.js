function calcularNotaPonderada(elementos) {
  if (!Array.isArray(elementos)) throw new TypeError('debe ser arreglo');
  for (const elem of elementos) {
    if (typeof elem !== 'object') throw new TypeError('debe ser objeto');
    if (typeof elem.nota !== 'number' || elem.nota < 0 || elem.nota > 100) throw new RangeError('nota mala');
    if (typeof elem.peso !== 'number' || elem.peso < 0 || elem.peso > 1) throw new RangeError('peso malo');
  }
  const pesoTotal = elementos.reduce((s, e) => s + e.peso, 0);
  if (Math.abs(pesoTotal - 1) > 0.001) throw new RangeError('pesos no suman 1');
  const suma = elementos.reduce((s, e) => s + e.nota * e.peso, 0);
  return Number(suma.toFixed(2));
}

const notas = [{ nota: 80, peso: 0.4 }, { nota: 90, peso: 0.6 }];

try {
  const notaFinal = calcularNotaPonderada(notas);
  document.getElementById('salida').textContent = 'Nota Final: ' + notaFinal;
} catch (e) {
  document.getElementById('salida').textContent = 'Error: ' + e.message;
}