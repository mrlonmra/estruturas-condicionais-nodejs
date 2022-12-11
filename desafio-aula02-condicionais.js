/*DESAFIO - AULA 02 - CONDICIONAIS*/

const prompt = require("prompt-sync")();
const precoEtanol = 3.79;    
const precoGasolina = 5.79;  
const mediaEtanol = 10;      
const mediaGasolina = 8;     
const distancia = prompt("Qual a distância da Viagem em KM? : "); 
const litrosConsumidosGasolina = distancia / mediaGasolina; 
const valorGastoGasolina = litrosConsumidosGasolina * precoGasolina;
const litrosConsumidosEtanol = distancia / mediaEtanol;     
const valorGastoEtanol = litrosConsumidosEtanol * precoEtanol;
/*perguntas*/
const combustivel = prompt("Seu carro utiliza Etanol? : ");
if (combustivel === 'sim','Sim'){
    console.log('O custo com combustivel para essa viagem é de R$', valorGastoEtanol.toFixed(2));
} else {
    console.log('O custo com combustivel para essa viagem é de R$', valorGastoGasolina.toFixed(2));
}
