/********************************************************************
*Objetivo: Manipular tratamentos de entrada de dados, conversão de dados atraves de um exercicio para medias escolaares e utilizar estruturas condicionais
*Data: 14/08/2024
*Autor: Matheus Bueno
*Versão: 1.0
*********************************************/


var readline = require('readline')

//Cria uma interface para entrada de dados via teclado no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



entradaDeDados.question('digite um numero:', function (numero_entrado){
    let numero_entrado1 = parseFloat(numero_entrado.replace(',','.'));

    entradaDeDados.question('digite um outro numero: ', function (outro_numero){
        let outro_numero1 = parseFloat(outro_numero.replace(',','.'));
    

        entradaDeDados.question('Escolha uma operação (1-soma, 2-subtração, 3-multipicação, 4-divisão): ',function(operações){
            let operações1 = parseFloat(operações)
        
            if (isNaN(numero_entrado1) || isNaN(outro_numero1)) {
                console.log(' ERRO: É OBRIGATORIO A ENTRADA DE NOTAS APENAS COM NUMEROS.')
            } else {
                let valor
        
            if(operações1 === 1){
            valor= (numero_entrado1 + outro_numero1) 
            console.log('a soma é:', valor.toFixed(2));
            
        }   else if (operações1 === 2){
            valor= (numero_entrado1 - outro_numero1)
            console.log('a subtração: ', valor.toFixed(2))

        } else if (operações1 === 3){
          valor = (numero_entrado1 * outro_numero1) 
          console.log('a multiplicação:',valor.toFixed(2)) 
        
        } else if(operações1 === 4){
            valor= (numero_entrado1 / outro_numero1)
            console.log('a divisão: ', valor.toFixed(2))
        }
        entradaDeDados.close()
        

            }
            
        })
    })
})             