const {
  getAllSchools,
  getSchoolById,
  createSchool,
  updateSchool,
  deleteSchool,
} = require("../controllers/school");

const express = require("express");

const api = express.Router();

api.route("/").get(getAllSchools).post(createSchool);
api.route("/:id").get(getSchoolById).put(updateSchool).delete(deleteSchool);

module.exports = api;
