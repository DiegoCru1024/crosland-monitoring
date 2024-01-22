const mongoose = require('mongoose').default

async function connectDB() {
    mongoose.connect(process.env.MONGO_URI).catch((e) => {
        console.log('[ERROR] Error al conectar con la base de datos...')
        console.log(e)
    })
}

module.exports = {connectDB}