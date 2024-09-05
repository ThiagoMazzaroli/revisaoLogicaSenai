
const tamanhoNome = (nome) => {
    return nome.length
}

const todasAsLetrasUpper = (nome) => {
    return nome.toUpperCase() 
}

const tracoNosEspaco = (nome) => {
    return nome.split('').join('-')
}

const todasAsLetrasLow = (nome) => {
    return nome.toLowerCase() 
}

const primeiraLetraUpper = (nome) => {

    return nome[0].toUpperCase()+nome.slice(1)
}

const primeiraLetraSobrenomeUpper = (nome, sobrenome) => {

    return nome[0].toUpperCase()+nome.slice(1)+sobrenome[0].toUpperCase()+sobrenome.slice(1)
}

const pinheiro = (pinheiro) => {
    pinheiro = ['    ***', '  *****', ' *******', '  *****', '   ***']

    return console.log(`${pinheiro[0]} \n ${pinheiro[1]} \n ${pinheiro[2]},\n ${pinheiro[3]}, \n ${pinheiro[4]}`)
    
}

const pinheiro2 = (pinheiro2) => {
    pinheiro2 = []

    for(let i = 1; i <= 5; i++){
        for(let j = 1; j <= 5; j++){
        pinheiro2 += "**"
    }
    pinheiro2 += "\n"
    }
    
    return pinheiro2
}


console.log(pinheiro(pinheiro))

console.log(pinheiro2(pinheiro2))

console.log("caracteres do seu nome é: " + tamanhoNome("thiago"))

console.log(tracoNosEspaco("thiago"))

console.log(todasAsLetrasUpper("thiago"))

console.log(todasAsLetrasLow("THIAGO"))

console.log(primeiraLetraUpper("thiago"))

console.log(primeiraLetraSobrenomeUpper("thiago", "mazzaroli"))


