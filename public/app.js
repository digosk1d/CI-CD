//reusar la logica de la funcion sum en el navegador

function sum(a, b){
    return a + b;
}

document.getElementById('out').textContent = `1 + 2 = ${sum(1,2)}`;