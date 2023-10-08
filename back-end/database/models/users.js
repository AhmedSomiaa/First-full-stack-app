const conn = require("../index");

module.exports = {
  getAll: function () {
    const sql = "SELECT * FROM `users`";
    return conn.query(sql);
  },

  getOne: function (iduser) {
    const sql = "SELECT * FROM `users` WHERE `id` = ?";
    return conn.query(sql, iduser);
  },

  add: function (user) {
    const sql = "INSERT INTO `users` SET ?";
    return conn.query(sql, user);
  },

  getUserByEmail: function (email) {
    const sql = "SELECT email FROM `users` WHERE `email` = ?";
    return conn.query(sql, email);
  },

  getUserByUsername: function (username) {
    const sql = "SELECT username FROM `users` WHERE `username` = ?";
    return conn.query(sql, username);
  },
};
