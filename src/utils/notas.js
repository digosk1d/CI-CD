function calcularNotaPonderada(elementos) {
  if (!Array.isArray(elementos)) {
    throw new TypeError('elementos debe ser un arreglo');
  }
  for (const elem of elementos) {
    if (typeof elem !== 'object' || elem === null) {
      throw new TypeError('cada elemento debe ser un objeto');
    }
    if (typeof elem.nota !== 'number' || elem.nota < 0 || elem.nota > 100) {
      throw new RangeError('nota debe ser un numero entre 0 y 100');
    }
    if (typeof elem.peso !== 'number' || elem.peso < 0 || elem.peso > 1) {
      throw new RangeError('peso debe ser un numero entre 0 y 1');
    }
  }
  const pesoTotal = elementos.reduce((suma, elem) => suma + elem.peso, 0);
  if (Math.abs(pesoTotal - 1) > 0.001) {
    throw new RangeError('suma de pesos debe ser 1 con tolerancia 0.001');
  }
  const sumaPonderada = elementos.reduce((suma, elem) => suma + elem.nota * elem.peso, 0);
  return Number(sumaPonderada.toFixed(2));
}

function percentil(p, valores) {
  if (typeof p !== 'number' || p < 0 || p > 100) {
    throw new RangeError('p debe ser un numero entre 0 y 100');
  }
  if (!Array.isArray(valores) || valores.length === 0) {
    throw new TypeError('valores debe ser un arreglo no vacio');
  }
  if (!valores.every(val => typeof val === 'number')) {
    throw new TypeError('todos los valores deben ser numeros');
  }
  if (p === 0) {
    return Number(Math.min(...valores).toFixed(2));
  }
  if (p === 100) {
    return Number(Math.max(...valores).toFixed(2));
  }
  const ordenados = [...valores].sort((a, b) => a - b);
  const n = ordenados.length;
  const rango = Math.ceil((p / 100) * n);
  return Number(ordenados[rango - 1].toFixed(2));
}

module.exports = { calcularNotaPonderada, percentil };