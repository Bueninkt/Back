/********************************************************************
*Objetivo: Manipular tratamentos de entrada de dados, conversão de dados atraves de um exercicio para medias escolaares e utilizar estruturas condicionais
*Data: 07/08/2024
*Autor: Matheus Bueno
*Versão: 1.0
*********************************************/
//import de para entrada de dados

var readline = require('readline')

var entradadedados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradadedados.question(' digite o nome do aluno:', function (nome) {
    let nomealuno = nome //let= usada como variavel local 

    entradadedados.question(' digite o nome do curso do aluno:', function (curso) {
        let cursoaluno = curso

        entradadedados.question('digite a nota 1:', function (valor1) {
            let nota1 = valor1

            entradadedados.question(' digite a nota 2:', function (valor2) {
                let nota2 = valor2

                entradadedados.question(' digite a nota 3:', function (valor3) {
                    let nota3 = valor3

                    entradadedados.question(' digite a nota 4:', function (valor4) {
                        let nota4 = valor4

                        let resultado
                        let situacao 
                        /*operadores de comparação 
                        == verificar a igualdade entre dois conteudos
                        != verifica a diferença entre dois conteudos 
                        > verifica se o valor é maior 
                        < verifica se o valor é menor 
                        <= verifica se o valor é menor ou igual
                        >= verifica se o valor é maior ou igual
                        === analisa o tipo de dado
                        !== verifica a diferença entre dois conteudos e a igualdade entre tipos de dados  
                        ==! verifica a igualdade entre dois conteudos e a diferença entre tipos de dados 
                        !=! verifica a diferença entre dois conteudos e a diferença entre os tipos de dados*/

                        //validação de entrada de dados vazias 
                        if (nomealuno == "" || cursoaluno == "" || nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "") {
                            console.log(' ERRO: campos obrigatorios.')
                        }
                        // validação das notas como numero 
                        else {
                            if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                console.log(' ERRO: É OBRIGATORIO A ENTRADA DE NOTAS APENAS COM NUMEROS.')
                            } else {
                                //validação de entrada de valores somente de 0 a 10
                                if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota4 > 10) {
                                    console.log("ERRO não podem ter notas negativas ou maior que 10.")
                                }
                                else{
                                    resultado = Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)/4
                                    
                                    if(resultado >=7 && resultado <=10){
                                        situacao = 'APROVADO'
                                    }else{
                                        if(resultado >= 5 && resultado < 7){
                                            situacao = 'RECUPERAÇÃO'
                                        }else{
                                            situacao = 'REPROVADO'
                                        }
                                    }
                                
                                    //impressão do boletim do aluno
                                    console.log(`************* Boletim do Aluno *************
    Nome do aluno: ${nomealuno}
    Curso: ${cursoaluno}
    Notas: ${nota1} , ${nota2} , ${nota3} , ${nota4}
    Média: ${resultado.toFixed(1)}
    Situação Final: ${situacao}
                    
                                    `)
                                entradadedados.close()
                                
                                }
                            }

                        }
                    })
                })
            })
        })
    })
})