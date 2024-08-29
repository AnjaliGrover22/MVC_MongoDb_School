const express = require("express");

const {
  getAllStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");

const api = express.Router();

api.route("/").get(getAllStudents).post(createStudent);
api.route("/:id").get(getOneStudent).put(updateStudent).delete(deleteStudent);

module.exports = api;
