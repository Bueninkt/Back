/*******************************************************************
 * Objetivo: Conhecer os primeiros Comandos do Js Dentro do Node
 * Data: 31/07/2024
 * Autor: Bueno
 * Versão: 1.0

******************************************************************/
console.log("Exercicio01 Node.JS")//permite exibir uma mensagem no terminal
////////////////////////////////////////////////////////////////
var nome = 'jose'
var valor1 = '10.5'
var valor2 = '20.2'

//criação de variaveis no JS:
// o comando var permite a criação de uma variavel global, podendo ultizar em topo lugar
// o comando let permite a criação de uma variavel que se aplica a somente a um (Bloco de de Programação).

/******************************************************************************************************** */

//o comando const não sofre mudança sendo o mesmo valor pra tudo pode ser usado globalmente e local

console.log('o nome do usuario é: ' + nome)//tradicional
console.log(`o nome do usuario é: ${nome}`)//forma reduzida

console.log(typeof(nome))//typeof -> permite identificar o tipo de dado de uma varivel

var resultado = Number(valor1) + Number(valor2) //parse"#"" mais a variavel permita a troca de variavel
console.log(resultado)                          //Number permite converer uma string para um numero inteiro, ou real entretando ultilizado apos a nova versão do NodeJs


