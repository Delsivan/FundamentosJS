// boolean - true ou false
const usuarioLogado = true
const contaPaga = false

// truthy ou falsy - nao sao boleano mas podem se comportar como boleano, (0 e 1).
//0 => false (falsy)
//"" => false (falsy)
//[] => false
//1 => true (truthy)

console.log(0 == false) //true
console.log([] == false) //true
console.log("" == false) //true
console.log(1 == true) //true
console.log(0 == true) //false.

console.log("_______________________________")
//undefined
let meuNome;
console.log(meuNome) //undefined
console.log(typeof meuNome) // undefined

//null ===> vazio ou nada, ele é criado como um objeto esse é bug mais nomalmente nao influencia no desenvolvimento do sistema.
let varNull = null;
console.log(varNull) // null
//typeof -> usada para ver o tipo de dado que esta sendo guardado na variavel.
console.log(typeof varNull) //object

