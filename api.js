const Hapi = require('@hapi/hapi');
const { request } = require('express');

const inicializacao = async () => {
  const server = Hapi.server({
    port: 2024,
    host: 'localhost',
  })
  try{
    const rotas = require('./RotasMongoDB')
    server.route(rotas)

    await server.start()
    console.log(`Servidor Hapi.js sendo iniciado em ${server.info.uri}`)

  }catch(error){
    console.log('Erro ao conectar', error)
  }
}
process.on('unhandledRejection', (error) => {
  console.log('Error:', error)
  process.exit(1)
})

inicializacao()


//Definir rotas e iniciar o servidor