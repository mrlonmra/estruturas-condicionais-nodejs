

const prompt = require("prompt-sync")();

const numero = prompt("Digite um número para saber se é impar ou par: ");

const numeroPar = (numero % 2) === 0;

if (numeroPar) {

    console.log('O número digitado foi o', numero, 'e ele é par.');

} else {

    console.log('O número digitado foi o', numero, 'e ele é impar.');
};



