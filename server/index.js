const connection = require('./struct/connection')
const customExpress = require('./config/customExpress')
const cors = require('cors')

connection.connect((error) => {
    // Conectando ao Bano de dados
    if (error) {
        console.log(error)
    } else {
        //Criando tabelas
        const tables = require('./struct/tables')
        tables.init(connection)
        // Iniciando Servidor após conexão
        const app = customExpress()
        app.listen(3010, () => {
            console.log("Servidor online! Porta 3010")
        })
    }
})