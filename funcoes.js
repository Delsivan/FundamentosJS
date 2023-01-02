// FUNÇÃO

// tres formas de escrever funções

// DECLARACAO DE FUNÇÃO
// 1) declara a função
//Declara     //nome   //string
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)
// pode reutilizar o código
imprimeTexto("Oi");
imprimeTexto("Ola mundo");

function soma() {
    return 2 + 2;
}

console.log(soma())

// Função que chama outra função
imprimeTexto(soma());


// EXPRESSÃO DE FUNÇÃO
// expressões anonimas, ou seja, a função não tem nome.
const soma = function(num1, num2) { return num1 + num2}
console.log(soma(1,1))

// ARROW-FUNCTION
// flexa =>
// ES6
// Ela deixa nosso código bem menor
// ela nao pode ser nomeada 
// Ela e um jeito rápido e curto de escrever funçãow
function apresentar(nome) {
    return `meu nome e ${nome}`;
}
                       //parâmetros
const apresentarArrow = nome => `meu nome e ${nome}`;
              //parâmetros
const soma = (num1, num2) => num1 + num2;

//Arrow function com mais de 1 linha de instrução
const somaNumeros = (num1, num2) => {
    if (num1 > 5 || num2 > 5){
        return "Somente numeros de 1 a 9"
    }else {
        return num1 + num2;
    }
}