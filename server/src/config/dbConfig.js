const mongoose = require('mongoose')


exports.startDb = async () => {
  await mongoose.connect(process.env.DB_URL)
    .then(connect => console.log('Database connected'))
    .catch(error => console.log(error))
}
