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
};
