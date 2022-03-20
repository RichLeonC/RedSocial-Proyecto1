const { MongoClient} = require('mongodb');
const url = 'mongodb+srv://admin:admin@cluster0.p0s6c.mongodb.net/dbredsocialMongo?retryWrites=true&w=majority'
const mongoConexion = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoConexion.connect(err => {
    //const collection = client.db("test").collection("devices");
    // perform actions on the collection object
   // mongoConexion.close();
   console.log('Mongo conectado');
  });

  module.exports = mongoConexion;
