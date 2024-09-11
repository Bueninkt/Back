/*******************************************************************************************************************************************************
*Objetivo: CalculadorA De operações matematicas;
*Data: 28/08/2024;
*Autor: Matheus Bueno;
*Versão: 1.0;
*********************************************************************************************************************************************************/
// faz um import do arquivo que vc deseja
var calculos = require('./modulo/calculos.js')


//Cria uma requisação para escrver no console, junto com o comando abaixo;

var readline = require('readline')

//cria um objeto para realizar entrada de dados;
var entradaDeDdados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada de dados para o valor 1;
entradaDeDdados.question('Digite o Valor 1: ', function (valor1) {
    let numero1 = String(valor1.replace(',', '.'))

    //entrada de dados para o valor 1;
    entradaDeDdados.question('Digite o Valor2: ', function (valor2) {
        let numero2 = String(valor2.replace(',', '.'))

        //entrada de dados para o tipo de operação;
        entradaDeDdados.question('Digite a operação de calculo [SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR]:', function (operacao) {
            let tipocalculo = operacao

            let resultado

            //Validção para verificar a entrada de dados em branco;
            //String -> Converte uma variavel para o tipo de dados de Texto;
            //replace -> permite localizar um caracter e muda para o caracter que voce quer;
            if (numero1 == '' || numero2 == '' || tipocalculo == '') {
                console.log('ERRO: é obrigatório a entrada de todos os dados.')
            } else if (isNaN(numero1) || isNaN(numero2)) {
                console.log('ERRO: é obrigatorio a entrada de dados apenas numéricos nos valores.')
            } else {




                resultado = calculos.Calculadora(numero1, numero2, tipocalculo)


                // Validação indefinida; 
                if (resultado){
                    console.log('O resultado é: ', resultado)
                }

            }



        })

    })
})
