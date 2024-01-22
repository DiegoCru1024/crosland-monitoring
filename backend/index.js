require('dotenv').config()

const cors = require('cors')
const express = require('express')
const dbDriver = require('./database/databaseConnection')
const {scheduledTest} = require("./functions/speedScheduleTest");

const getData = require('./routes/getData')
const {generateDailyResume} = require("./functions/dailyResume");

dbDriver.connectDB().then(() => {
    console.log('[MONGO] Conexión exitosa a la base de datos...')
})

const hourInterval = 1000 * 60 * 60
setInterval(scheduledTest, hourInterval)

const dailyInterval = 1000 * 60 * 60 * 24
setInterval(generateDailyResume, dailyInterval)

const app = express();
app.disable("x-powered-by")
const corsOptions = {
    origin: process.env.CORS_URL,
};

app.use(express.json())
app.use(cors(corsOptions))

app.use('/getData', getData)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Servidor Express en ejecución en el puerto ${process.env.PORT || 5000}`);
});
