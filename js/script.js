const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');
  
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult('Peso inválido', false)
    return;
  }

  if (!altura) {
    setResult('Altura inválida', false)
    return;
  }

  const imc = getImc(peso, altura);
  const levelImc = getLevelImc(imc);
  const msg = `Seu IMC é ${imc} (${levelImc})`;

  setResult(msg, true);
});

function getLevelImc (imc) {
  const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesiade grau 3']

  if (imc >= 39.9) {
    return level[5];
  } 

  if(imc >= 34.9) {
    return level[4];
  } 

  if(imc >= 29.9) {
    return level[3];
  }
  
  if(imc >= 24.9) {
    return level[2];
  } 
  
  if(imc >= 18.5) {
    return level[1];
  } 
  
  if(imc < 18.5 ) {
    return level[0];
  }
}

function getImc (peso, altura) {
  const imc = peso /  altura **2;
  return imc.toFixed(2);

}

function createP() {
  const p = document.createElement('p');
  return p;
}

function setResult (msg, isValid){
  const result = document.querySelector ('.result');
  result.innerHTML = '';

  const p = createP();
  
  if (isValid) {
  p.classList.add('container-result');
  } else {
    p.classList.add('bad');
  }
  p.innerHTML = msg;
  result.appendChild(p);
}