var gerarNumeros = require('./modulo/funcoes.js')

var readline = require('readline')


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



entradaDeDados.question('Digite o numero Inicial: ', function(numero1){
    let valor1 = numero1

    entradaDeDados.question('Digite o numero final: ', function(numero2){
        let valor2 = numero2
    
    
        if(!gerarNumeros.gerarNovosNumerosSequenciais(valor1, valor2)){
            console.log('Não foi possivel processar as requisiçoes')
        }
    
    
    })



})



