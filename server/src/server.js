const express = require('express')
const cors = require('cors')
const fs = require('fs')
const {startDb} = require('./config/dbConfig');
const errorMiddleware = require('./middlewares/errorMiddleware');
require('dotenv').config()

const app = express()


// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Routes
const routesDir = './src/routes'
fs.readdirSync(routesDir).map(router => app.use('/api', require(`./routes/${router}`)))
app.use(errorMiddleware)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server working on PORT ${PORT}`))

startDb()
