require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const api = require("./routes");

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect('add your Mongo URI');

app.get("/", (req, res) => {
  return res.status(200).send("ok");
});

app.use("/api", api);

app.listen(4000, () => {
  console.log("Server Running on port 4000");
});
