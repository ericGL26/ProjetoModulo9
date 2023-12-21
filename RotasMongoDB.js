const dadosRequisitados = require('./mongodb')
console.log('DADSSRRr', dadosRequisitados)

const RotasMongoDB = [
    {
        method: 'GET',
        path: '/mensagem',
        handler: (request, h) => {
            return 'Opa, Parece que deuuu certo!'
        },
    },
    {
        method: 'GET',
        path: '/herois',
        handler: (request, h) => {
            
        }
    },
]


module.exports = RotasMongoDB;