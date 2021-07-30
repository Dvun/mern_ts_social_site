const mongoose = require('mongoose')


exports.startDb = async () => {
  await mongoose.connect(process.env.DB_URL, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  }).then(connect => console.log('Database connected'))
    .catch(error => console.log(error))
}
