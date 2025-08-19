function toCelsius(f) {
  if (isNaN(f)) throw new Error('No es un número');
  return Math.round((f - 32) * 5 / 9);
}

function toFahrenheit(c) {
  if (isNaN(c)) throw new Error('No es un número');
  return Math.round((c * 9 / 5) + 32);
}

function movingAverage(series, window) {
  if (series.some(x => isNaN(x)) || window < 2) throw new Error('Datos o ventana incorrectos');
  let result = [];
  for (let i = 0; i <= series.length - window; i++) {
    let sum = 0;
    for (let j = 0; j < window; j++) {
      sum += series[i + j];
    }
    result.push(Math.round(sum / window));
  }
  return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };