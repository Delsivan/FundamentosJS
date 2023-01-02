// boolean
// true -> verdadeiro
// false -> false
// O JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas.
// 
const primeiroNumero = 10;
const segundoNumero = 15;

// = atribui valor a uma variavel.
// == compara somente os valores (comparacao implicita), deve EVITAR usar deve optar pela conversao explicita.
// === comparacao de valores e tipo, onde ele ira retornar true ou false, deve-se optar por usar essa comparacao.

console.log(primeiroNumero === segundoNumero) // false

// Tipos null e undefined
// null -> ausencia de valor e pode ser atribuido como valor de uma variavel:
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

// undefined -> esse tipo de valor tambem representa "ausencia de valor", e se refere tambem uma variavel que nao foi inicializada  (ou seja, não foi atribuído nenhum valor a ela).
// undefined -> tambem e o valor retornado por uma funcao que nao tem clausula return.

console.log(null == undefined); // true
console.log(null === undefined); // false