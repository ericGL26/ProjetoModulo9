const { MongoClient } = require('mongodb')
async function obterDadosDoMongoDB() {
  const url = 'mongodb://admin:senhaadmin@localhost:27017/herois?authSource=admin';
  const NomeBancoDB = 'herois';

  const client = new MongoClient(url)

  try {
    await client.connect()
    console.log('Conectado ao MongoDB com sucesso!')
    const SelecionarBanco = client.db(NomeBancoDB)
    const colecao = SelecionarBanco.collection('herois')
    const dadosRequisitados = await colecao.find({}).toArray()
    module.exports = dadosRequisitados
  }finally {
    await client.close()
  }
}
obterDadosDoMongoDB()