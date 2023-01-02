// VAR - Nao e recomenda usar por ser muito solta, ela pode ser declarada a qualque momento no codigo. NAO USAR VAR.
// LET - Permite alterar os valores dela, devemos declarar ela antes de ser utilizada, por esse motivo ela e recomendada para uso.
// CONST - Tem valor fixo, uma vez declarada o valor fica atribuido a ela, ela tambem deve ser declarada antes.

//var - a variavel pode ser declarada depois da atribuicao, isso pode gerar bugs, devemos evitar usar o var.
var altura = 7;
var comprimento = 9;

area = altura * comprimento;
console.log(area)
var area;

//let - a variavel tem que ser declarada ou iniciada antes de utiliza-la, isso evita bugs.
let altura2 = 5;
let comprimento2 = 9;
let area2;

area2 = altura2 * comprimento2;
console.log(area2)

//const - sao valores constante uma vez declarada, nao sera possivel mudar o valor dela no programa.
// sempre que declarar uma const ela precisa ser atribuida um valor a ela, se ela nao tiver um valor de atribuicao de usar o let.
const altura3 = 9;
const comprimento3 = 9;
let area3;

area3 = altura3 * comprimento3;
console.log(area3)

// tipagem dinamica - quando a gente cria uma variavel nao precisamos informar qual o tipo de dados, o JS ver qual e o tipo e infere essa informacao.
// ele aceita a troca de tipo de dados.
// untyped - nao precisa declarar os tipos de variaveis.
let  minhaVariavel = 123;
minhaVariavel = "Ola!";
minhaVariavel = true;

