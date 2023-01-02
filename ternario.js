const nome = "Max"
const idadeMinima = 18;
const idadeCliente = 15;

if(idadeCliente >= idadeMinima){
     console.log("Pode entrar!")
}else {
     console.log("Não pode entrar!")
}

// Operador ternário e ideal para condições curtas com poucas instruções.
                    //condição               //true              //false
console.log(idadeCliente >= idadeMinima ? "Pode entrar!" : "Não pode entrar!")

const idadeMaior = "pode entrar!"
const idadeMenor = "não pode entrar!"

const entrada = `${nome} por favor, qual a sua idade? ${idadeCliente}, ${nome} você ${idadeCliente >= idadeMinima ? idadeMaior : idadeMenor}`
console.log(entrada)