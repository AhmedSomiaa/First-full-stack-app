const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/recipes";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
   .then(() => {
      console.log("Connected to MongoDB");
   })
   .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
   });
  

const db = mongoose.connection;

module.exports = db;