// Tipos primitivos
// tipo Number
const meuNumero = 3;

const primeiroNumero = 4;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante
const PrimeiroNumeroPontoFlutuante = 2.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / PrimeiroNumeroPontoFlutuante;

console.log(novaOperacao)


// NaN -> Not A Number (Não é um número)
const nome = "Meu Nome";
console.log(nome * primeiroNumero)

var a = 20
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // NaN

// Ordenação 
var lista = [20, 1, 2, 9, 7, 12, 16]
lista.sort(); // nao ira ordenar na ordem espera, pois o sort() por padrao a ordenacao alfabetica
console.log(lista)
// nesse caso a solucao e usar a nossa propria funcao de comparacao
function comparaNumeros(a,b) { 
    if (a == b) return 0; 
    if (a < b) return -1; 
    if (a > b) return 1; 
}
lista.sort(comparaNumeros);
console.log(lista)

// Simplificando a implementacao da ordenacao
lista.sort((a, b) => a - b);
console.log(lista)