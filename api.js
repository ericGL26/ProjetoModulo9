const Hapi = require('@hapi/hapi');
const { request } = require('express');
const { MongoClient } = require('mongodb')

const inicializacao = async () => {
  const server = Hapi.server({
    port: 2024,
    host: 'localhost',
  })
  const url = 'mongodb://localhost:27017';
  const dbName = 'heroes'

  const client = new MongoClient(url)

  
  try{
    await client.connect()
    console.log('Conectado ao MongoDB com sucesso');

    server.app.db = client.db(dbName)

    server.route({
      method: 'GET',
      path: '/mensagem',
      handler: (request, h) => {
        return 'Olá, Parece que deu certo!'
      }
    })

    await server.start()
    console.log(`Servidor Hapi.js sendo iniciado em ${server.info.uri}`)

  }catch(error){
    console.log('Erro ao conectar ao MOngoDB:', error)
  }
}

process.on('unhandledRejection', (error) => {
  console.log('Error:', error)
  process.exit(1)
})

inicializacao()


//Definir rotas e iniciar o servidor