const usersModel = require("../database/models/users.js");
const bcrypt = require("bcryptjs");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const [users, fields] = await usersModel.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json("Internal Server Error");
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.userId;
    try {
      const [user, fields] = await usersModel.getOne(userId);
      if (user.length === 0) {
        res.status(404).json("User not found");
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json("Internal Server Error");
    }
  },

  signup: async (req, res) => {
    const { username, email, password } = req.body;
    // Check if username already exists
    const [usernameExists] = await usersModel.getUserByUsername(username);
    if (usernameExists.length > 0) {
      return res.status(410).json("Username already exists");
    }
    // Check if email already exists
    const [emailExists] = await usersModel.getUserByEmail(email);
    if (emailExists.length > 0) {
      return res.status(411).json("Email already exists");
    }
    const hashedPassword = bcrypt.hashSync(password, 8);
    try {
      const result = await usersModel.add({
        username,
        email,
        password: hashedPassword,
      });
      console.log(result);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json("Internal Server Error");
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const [userRows, fields] = await usersModel.getUserByEmail(email);
      if (userRows.length === 0) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const user = userRows[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.json({
          user: { id: user.id, username: user.username, email: user.email },
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
