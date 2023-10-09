const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

//Create an Express App
const app = express();

//Require application Route modules
const usersRouter = require("./routes/users");
const recipesRouter = require("./routes/recipes");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

app.use(cors());

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/users", usersRouter);
app.use("/recipes", recipesRouter);

module.exports = app; // export the express app.
