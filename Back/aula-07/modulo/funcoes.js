/*******************************************************************************************************************************************************
*Objetivo:  Arquivo responsavel pela criação de funçoes e estruturas de repetição;
*Data: 04/08/2024;
*Autor: Matheus Bueno;
*Versão: 1.0;
*********************************************************************************************************************************************************/
//função tradicional
function gerarNumerosSequenciais(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let contador
    let status = false 

    if(!validarDados (numeroI, numeroF)){
            contador = parseInt(numeroI)

            while(contador <= parseInt(numeroF)){
                status = true
                console.log(contador)
                    contador ++
            }
        }
        return status
}
// função anonima
const validarDados = function(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal 
    let status = false

    if(numeroI == '' || numeroF == ''){
        status = true
        console.log('ERRO: o preenchimento dos dados são obrigatorios')

    }else if (isNaN (numeroI) || isNaN(numeroF) ){
        status = true
        console.log('ERRO: não é permitido a entrada de letras.')
    }

    return status 
}

//função de seta
const  gerarNovosNumerosSequenciais = (numeroInicial, numeroFinal) =>{
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = false

    if(!validarDados(numeroI, numeroF)){
        for (let contador = parseInt(numeroI); contador <= parseInt(numeroF); contador ++ ){
            status = true
            console.log(contador)

            
        }
    }
    return status
}

//console.log(validarDados('a',5))
//console.log(gerarNovosNumerosSequenciais(10,70)) 
//console.log(gerarNumerosSequenciais(2,'a'))

module.exports = {
    gerarNumerosSequenciais,
    gerarNovosNumerosSequenciais

}


