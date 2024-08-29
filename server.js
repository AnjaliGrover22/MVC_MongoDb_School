const port = process.env.PORT || 8085;
const express = require("express");
const app = express();
require("colors");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbinit");
const student = require("./routes/student");
const teacher = require("./routes/teacher");
const school = require("./routes/school");
connectDB();

//middlewares
app.use(cors()); //security purpose , to manage and control cross origins requests
app.use(express.json()); //whatever we encounter, if it needed , convert it into json
app.use(express.urlencoded({ extended: true })); //urlencoded means its ready to read to data from form, where extended is true says, its open to handle difficult data

app.get("/", (req, res) => {
  res.send("Welcome to MVC pattern + MongoDB");
});

app.use("/api/students", student);
app.use("/api/teachers", teacher);
app.use("/api/schools", school);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`.rainbow);
});
