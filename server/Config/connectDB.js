const mongoose= require('mongoose')
require('dotenv').config({path:'./Config/.env'})


// Databse connection

const ConnectDB = async () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("SUCCESSFULLY Connected"))
      .catch((error) => console.error(error));
  };

module.exports = ConnectDB