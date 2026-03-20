// importando os estdos e cidades do outro arquivo .js
const listaEstadosCidades = require('./estados_cidades.js')

// demonstra todas as siglas dos estados na nossa lista
function getListaDeEstados (){
    // array
    let estados = []

    // uma rep para pegar todos os estados presentes 
    // listaEstadosCidades tem as informações do estados_cidades.js
    listaEstadosCidades.estados.forEach(function(estado){
        // coloca as informações solicitadas dentro do array criado
        estados.push(estado.sigla)
    })

    // retorna em um json com um array mostrando a sigla dos estados e a quantidade deles  
    return {
        // retorna o que tem no array
        uf: estados,
        // mostra a quantidade de objetos de no array
        quantidade: estados.length
    }
}

function getDadosEstado (uf){
    let siglaSolicitada 

    // fazendo a repetição e entregando um dado para cada pedido
    listaEstadosCidades.estados.forEach(function(informacao){

        if (informacao.sigla === uf){
        
        siglaSolicitada = {
        // pede a sigla
        uf: (informacao.sigla),
        // pede o nome
        descricao: (informacao.nome),
        // pede a capital
        capital: (informacao.capital),
        // pede a região
        regiao: (informacao.regiao)
    
    }
    }
    })

    // retorna as informações solicitadoas sobre os estados
    return siglaSolicitada
}

function getCapitalEstado (uf){
    let siglaSolicitada

    listaEstadosCidades.estados.forEach(function(info){
        // valida se a sigla digitada bate com alguma da informações que o "info" conseguiu do estado
        if(info.sigla === uf){
            siglaSolicitada = {
                uf: (info.sigla), descricao: (info.nome), capital: (info.capital)
            }
        }
    })

    return siglaSolicitada
}

function getEstadosRegiao (regiao){
    let estados = []
    let cidadesDoEstado

    listaEstadosCidades.estados.forEach(function(estadosRegiao){

        // verifica se a informação solicitada é emcontrada na regiao
        if(estadosRegiao.regiao === regiao){

            // cidadesDoEstado vai colocar as informações em ordem
            cidadesDoEstado = {
                uf: (estadosRegiao.nome), descricao: (estadosRegiao.nome)
            }

            // estado vai pegar a cidadesDoEstado e deixa no array dele
            estados.push(cidadesDoEstado)
        }
    })

    return {
        regiao: regiao,
        estado: estados
}
}

function getCapitalPais (){
    let capitais = []
    let capital
    let result

    listaEstadosCidades.estados.forEach(function(capitaisBrasil){
       
    })

    return 
}

function getCidades (sigla){
    let result

    listaEstadosCidades.estados.forEach(function(estadosCidades){

        if(estadosCidades.sigla === sigla){
            result = estadosCidades
        }
    })

    return {
        uf: (result.sigla),
        descricao: (result.nome),
        quantidade_cidades: (result.cidades).length,
        cidades: result.cidades.map(cidades => cidades.nome)
    }
}
console.log (getCapitalPais())