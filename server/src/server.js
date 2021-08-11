const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path')
const {startDb} = require('./config/dbConfig');
const errorMiddleware = require('./middlewares/errorMiddleware');
require('dotenv').config();

const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}));
app.use('/images', express.static(path.join(__dirname, 'public/images')))


// Routes
const routesDir = './src/routes';
fs.readdirSync(routesDir).map(router => app.use('/api', require(`./routes/${router}`)));
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server working on PORT ${PORT}`));

startDb();
