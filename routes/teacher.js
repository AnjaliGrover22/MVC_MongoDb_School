const express = require("express");
const {
  getAllTeachers,
  getOneTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacher");

const api = express.Router();

api.route("/").get(getAllTeachers).post(createTeacher);
api.route("/:id").get(getOneTeacher).put(updateTeacher).delete(deleteTeacher);

module.exports = api;
