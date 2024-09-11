/*******************************************************************************************************************************************************
*Objetivo: arquivo responsavel pelas funçoes de calculos matematicas;
*Data: 28/08/2024;
*Autor: Matheus Bueno;
*Versão: 1.0;
*********************************************************************************************************************************************************/

function Calculadora(valor1, valor2, operação) {
    
    let numero1 = valor1
    let numero2 = valor2
    let tipocalculo = operação
    let resultado

    //toUpperCase() -> Converte uma String para MAIUSCULO;
    //toLowerCase() -> Converte uma String para minúsculo;

    if (tipocalculo.toUpperCase() == 'SOMAR') {
        resultado = Number(numero1) + Number(numero2)
    } else if (tipocalculo.toUpperCase() == 'SUBTRAIR') {
        resultado = Number(numero1) - Number(numero2)
    } else if (tipocalculo.toUpperCase() == 'MULTIPLICAR') {
        resultado = Number(numero1) * Number(numero2)
    } else if (tipocalculo.toUpperCase() == 'DIVIDIR') {
        resultado = Number(numero1) / Number(numero2)

        if (numero2 == 0) {
            console.log('ERRO: NÃO É POSSIVEL DIVIDIR POR 0')

        } else {
            resultado = Number(numero1) + Number(numero2)
        }
    } else {
        console.log('ERRO: Somente será realizado o calculo das operações identificadas.')
    } 

    // validação para verificar se o retorno da função sera um numero um será falso
    if (resultado != undefined) {
        return resultado

    } else {
        return false
    }

}

module.exports = {
    Calculadora
}