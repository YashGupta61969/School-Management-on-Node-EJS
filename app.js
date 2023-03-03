require("dotenv").config();
require("./models");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const routes = require("./src/routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

app.use('/',routes)

app.listen(port, () => {
  console.log(`listening at Port ${port}`);
});