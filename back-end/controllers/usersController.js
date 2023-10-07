const usersModel = require("../database/models/users.js");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await usersModel.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await usersModel.getOne(userId);
      if (user.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(user[0]);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  addUser: async (req, res) => {
    const user = req.body;
    try {
      const result = await usersModel.add(user);
      res
        .status(201)
        .json({ message: "User added successfully", id: result.insertId });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
