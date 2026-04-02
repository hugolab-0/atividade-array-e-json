/************************************
 * Objetivo: arquivo responsavel pela API do projeto "Estados e cidades"
 * data: 01/04/2026
 * autor: Hugo
 * versão: 1.0
 * 
 * instalação do EXPRESS - npm install express --save
 *                dependencia responsavel pela utilização do protocolo HTTP para 
 *                criar uma API
 * 
 * instalção do CORS - npm install cors --save
 *                dependencia responsavel pelas configurações a serem realizadas 
 *                para a premissão de acesso à API 
 * 
 ************************************/

// importe das dependencias para criar a API 
const express = require('express')
const cors    = require('cors')

// importe das minhas funções
const estadosCidades = require('./modulo/funcoes.js')
const { estados } = require('./modulo/estados_cidades')
const { request } = require('node:http')

// criando um objeto para manipular o express
const app =  express()

// conjunto de permissões a serem aplicas do CORs na API 
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo ser o IP ou o "*"(todos)
    methods: 'GET', //Os methods são os verbos(metodos) que serao liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['content-type', 'autorization'] //AllowedHeader são permissões de cabeçalho do cors
}
// decretado o que o app ira usar e da onde ele vai tirar as configurações
// ele serve para configurações da API usando o CORS
app.use(cors(corsOptions))

// pagina inicial da api
app.get('/', function(req, res){
    let doc = {
        "primeiro": "use /v1/senai/help para iniciar"
    }
    res.send('API funcionando 🚀')

})

// res(response) -> são retorno sda API 
// req(request)  -> são chegadas de dados na API

// criando ENDPOINTS para API
// bons modos: /versao/nome do projeto ou empresa
// :uf -> para pegar a sigla que voce digitar na url

// retorna estados filtrando por uf 
app.get('/v1/senai/dados/estado/:uf', function(req, res){
    let sigla = req.params.uf
    let dadosEstados = estadosCidades.getDadosEstado(sigla)

    if(dadosEstados){
        res.status(200)
        res.json(dadosEstados)
    }
    else{
        res.status(404)
        res.json({"mensagem": "o estado nao foi encontrado"})
    }
    
})

// retorna dados da egiao filtrando por regiao
app.get('/v1/senai/estado/regiao/:regiao', function(req, res){
    let regiao = req.params.regiao
    let dadosRegiao = estadosCidades.getEstadosRegiao(regiao)

    if (dadosRegiao){
        res.json(dadosRegiao)
        res.status(200)
    }
    else{
        res.json({"mensagem": "regiao nao encontrada"})
        res.status(400)
    }
})

// retorna as capitais do brasil
app.get('/v1/senai/estado/capital/brasil', function(req, res){
    let capitalBrasil = estadosCidades.getCapitalPais()

    res.status(200)
    res.json(capitalBrasil)
})

// retorna as cidades de um estdo filtrando por uf
app.get('/v1/senai/estado/cidades/:uf', function(req, res){
    let sigla = req.params.uf
    let cidades = estadosCidades.getCidades(sigla)

    if(cidades){
        res.status(200)
        res.json(cidades)
    }
    else{
        res.status(404)
        res.json({"mensagem": "estado nao encontrada"})
    }
})

app.get('/v1/estado/estado/capital/:uf', function(req, res){
    let sigla = req.params.uf
    let capitalEstado = estadosCidades.getCapitalEstado(sigla)

    if(capitalEstado){
        res.status(200)
        res.json(capitalEstado)
    }
    else{
        res.status(404)
        res.json({"mensagem": "estado nao encontrada"})
    }
})

// retorna estado
app.get('/v1/senai/estados', function(req, res){    

    let estados = estadosCidades.getListaDeEstados()

    res.status(200)
    res.json({estados})
   
})

app.get('/v1/senai/help', function(req,res){
    let docAPI = {
        "API-description": "API para manipular dados de estados e cidades",
        "date": "2026-04-02",
        "developement": "Hugo",
        "version": "1.0",

        "Endpoints": [
            {
                "id": 1,   
                "rota 1": "/v1/senai/estados",
                "funcao": "retorna uma lista com todos os estados"
            },

            {
                "id": 2,   
                "rota 2": "/v1/senai/dados/estado/:uf",
                "funcao": "retorna as informações de um estado filtrado pela uf"
            },

            {
                "id": 3,   
                "rota 3": "/v1/senai/estado/regiao/:regiao",
                "funcao": "retorna uma lista com todos os estados filtrando pela regiao"
            },

            {
                "id": 4,   
                "rota 4": "/v1/senai/estado/capital/brasil",
                "funcao": "retorna uma lista com todas as capitais que o Brasil ja teve e tem"
            },

            {
                "id": 5,   
                "rota 5": "/v1/senai/estado/cidades/:uf",
                "funcao": "retorna uma lista com todas as cidades de um estado filtrando pela sigla"
            },

            {
                "id": 6,   
                "rota 6": "/v1/senai/estado/capital/:uf",
                "funcao": "retorna as informações de um estado filtrando pela capital"
            }
        ]

    }

    res.status(200).json(docAPI)

})



// serve para inicar a API para receber requisiçõess
app.listen(8080, function(){
    console.log('arquivo pronto')
})