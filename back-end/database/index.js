const mysql = require("mysql2");
const config = require("../config/config.json");

const connection = mysql
  .createConnection({
    host: "localhost",
    user: config.user, //username imported from the config files
    password: config.password, //password imported from the config files
    database: config.database, //database name imported from the config files
  })
  .promise();

connection
  .connect()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error to connect to database", err);
  });

module.exports = connection;
