require("dotenv").config();
require("./models");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const adminRoute = require('./src/routes/adminRoute')
const schoolRoute = require('./src/routes/schoolRoute')
const studentRoute = require('./src/routes/studentRoute')
const classRoute = require('./src/routes/classRoute')
const teacherRoute = require('./src/routes/teacherRoute')
const subjectRoute = require('./src/routes/subjectRoute')

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

app.use("/admin", adminRoute);
app.use('/school', schoolRoute);
app.use("/student", studentRoute);
app.use("/class", classRoute);
app.use("/teacher", teacherRoute);
app.use("/subject", subjectRoute);

app.listen(port, () => {
  console.log(`listening at Port ${port}`);
});