const mongoose = require("mongoose");
const url = 'mongodb+srv://admin:admin@cluster0.p0s6c.mongodb.net/dbredsocialMongo?retryWrites=true&w=majority'


mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

  module.exports = mongoose;