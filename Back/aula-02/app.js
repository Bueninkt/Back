/***************************************************************************************************************
 * Objetivo: Manipular entrada saida de dados pelo app.js
 * Data: 31/07/2024
 * Autor: Bueno
 * Versão: 1.0
 **************************************************************************************************************/
//Import da biblioteca readline que será responsavel por manipular entrada de dados
    //via teclado pelo terminal
var readline = require('readline')

//Cria uma interface para entrada de dados via teclado no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

//Permite retornar a entrada de dados fornecida pelo usuário no terminal. Isso acontece atraves de uma função de CallBack.'


entradaDeDados.question('Digite seu nome: ', function(nome){ 
    var nomeUsuario = nome
    //console.log('O nome do Usuario é: '+ nomeUsuario)
    entradaDeDados.question('Digite Seu Email: ', function(email){
        var emailusuario = email
        //console.log('O email do Usuario' +nomeUsuario+ ' é ' +emailusuario)
        //console.log(`O email do ${nomeUsuario} é ${emailusuario}`)

    entradaDeDados.question('Digite o nome do curso', function(curso){
        var nomeCurso = curso
        console.log(`O nome de usuario ${nomeUsuario} é ${emailusuario} é o curso é de: ${nomeCurso} `)
        entradaDeDados.close()
    })
    })
})


    //question habilita para você escrever





//Funçao de Callback: 