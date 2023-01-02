// VAR - Escopo global, e funciona em qualquer parte do codigo, o que pode gerar possiveis bugs na logica do sistema.
// LET - Tem escopo local.
// CONST - Tem escopo local.

// = atribui valor a uma variavel.
// == compara somente os valores.
// === comparacao de valores e tipo, onde ele ira retornar true ou false.

// booleanos

//conversao implicita
const numero = 123;
const numeroString = "123";

console.log(numero === numeroString) // false -> compara o valores e os tipos.

console.log(numero == numeroString) // true -> compara so os valores

console.log(numero + numeroString) // 123123

// conversao explicita
//Number() - transformar String em numero.
//String() - transformar numero em string.
//toString() - tambem converte para string.
console.log(numero + Number(numeroString))
console.log(numero.toString())
// OU
const numeroString2 =  Number("123");


const numeroString3 =  Number("123A");
console.log(numeroString3) // NaN

// Podemos usar o operador de soma + para converter de textos para numero, colocando-os antes das variaveis.
let largura = "2";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis.

let meuNome = "maria";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioLogado = false;
console.log(Number(usuarioLogado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioLogado = true;
console.log(Number(usuarioLogado)); // agora teremos a conversão de true (verdadeiro) para o número 1.
