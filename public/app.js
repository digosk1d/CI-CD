// Reusar lógica de conversión en el navegador (demo simple)

// Función copiada para demo (original en src/utils/conversions.js)
function toCelsius(f) {
  if (typeof f !== 'number' || !Number.isFinite(f)) {
    throw new TypeError('Input must be a finite number');
  }
  const c = (f - 32) * 5 / 9;
  return Math.round(c * 10) / 10; // Redondeo a 1 decimal
}

document.getElementById('out').textContent = `Conversión demo: 32°F = ${toCelsius(32)}°C`;