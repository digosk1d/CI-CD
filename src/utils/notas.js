function calcWeightedGrade(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('La entrada debe ser una arreglo');
  }

  for (const item of items) {
    if (typeof item !== 'object' || item === null) {
      throw new TypeError('debe ser un objeto');
    }
    if (typeof item.score !== 'number' || item.score < 0 || item.score > 100) {
      throw new RangeError('debe ser un numero entre 0 a 100');
    }
    if (typeof item.weight !== 'number' || item.weight < 0 || item.weight > 1) {
      throw new RangeError('peso debe estar entre 0 a 1');
    }
  }

  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  if (Math.abs(totalWeight - 1) > 0.001) {
    throw new RangeError('Suma de los pesos debe ser 1 ± 0.001');
  }

  const weightedSum = items.reduce((sum, item) => sum + item.score * item.weight, 0);
  return Number(weightedSum.toFixed(2));
}

function percentile(p, values) {
  if (typeof p !== 'number' || p < 0 || p > 100) {
    throw new RangeError('p debe estar entre 0 y 100');
  }
  if (!Array.isArray(values) || values.length === 0) {
    throw new TypeError('no puede haber valores vacios');
  }
  if (!values.every(val => typeof val === 'number')) {
    throw new TypeError('todos los valores deben ser numeros');
  }

  if (p === 0) {
    return Number(Math.min(...values).toFixed(2));
  }
  if (p === 100) {
    return Number(Math.max(...values).toFixed(2));
  }

  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  const rank = Math.ceil((p / 100) * n);
  return Number(sorted[rank - 1].toFixed(2));
}

module.exports = { calcWeightedGrade, percentile };