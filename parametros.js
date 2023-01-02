// Parametros de funcoes
function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(4, 4))
console.log(soma(2, 4))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(5, 2)))

