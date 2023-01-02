// Formas de escrever strings no JS
const primeiroTexto = "Ola, mundo!";
const SegundoTexto = 'Ola, mundo!';
const StringDeNumeros = "55588844"

const citacao = 'O fulano disse "Oi"';
console.log(citacao);

const citacao2 = "O fulano disse 'Oi'";
console.log(citacao2);

// templete string OU templete literal
// PESQUISAR


// Concatenação (+)
const meuNome = "Meu nome e "
const nome = "Max"
console.log(meuNome + nome)

// código Unicode
// Os caracteres \u no inicio usamos para indicar o JavaScript que estamos usando códigos Unicode, e não de strings de texto usuais.
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Comparação (===)
// O JavaScript diferencia minúsculas   de maiúsculas.
const cidade1 = "palmas";
const cidade2 = "Palmas";
console.log(cidade1 == cidade2); // false

// Padronizar todos os textos para minúsculas.
const cidade3 = "palmas";
const cidade4 = "Palmas";

const textoMinusculo = cidade4.toLowerCase();
console.log(cidade3 == textoMinusculo); // true

// Métodos  do JavaScript
// toLowerCase() -> converte todos os caracteres da string informada para  para letras minúsculas.
// length -> a propriedade length para contar quantos caracteres uma string contém:
console.log(nome.length) // 5 caracteres

// Template String (Templete Modelo)
// Surgiu para facilitar a concatenação

const idade = 2022 - 2016;
const cidadeDeNascimento = "Palmas"

// Com concatenação
const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

console.log(apresentacao)

// Com Template String (Templete Modelo)
const segundaApresentacao = `Meu nome é ${nome},  minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;