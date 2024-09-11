/***************************************************************************************************************
 * Objetivo: Realizar um calculasdora pelo app.js
 * Data: 07/08/2024
 * Autor: Bueno
 * Versão: 1.0
 **************************************************************************************************************/

var readline = require('readline')

//Cria uma interface para entrada de dados via teclado no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

//Permite retornar a entrada de dados fornecida pelo usuário no terminal. Isso acontece atraves de uma função de CallBack.'


entradaDeDados.question('Digite seu capital: ', function(capital){ 
    var capital1 = parseFloat(capital)
    
    entradaDeDados.question('Digite Sua taxa em porcentagem: ', function(Taxa){
        var Taxa1 = parseFloat(Taxa)
     
    entradaDeDados.question('Digite o numeros de vezes que os juros são compostos por ano: ', function(n){
        var n1 = n
    
    entradaDeDados.question('Digite o tempo em anos: ', function(tempo){
    

    conversao = Taxa/100

    var montante =  capital1 * (1+ Taxa1/n1)**(n1*tempo)   
    entradaDeDados.close()
    console.log(montante)
    })
    })
    })
})

