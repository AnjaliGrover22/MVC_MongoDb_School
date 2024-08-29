const Teacher = require("../schemas/Teacher");

//get all teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    if (!teachers.length) {
      res.status(200).json({ message: "No teacher found in the database" });
    } else {
      res
        .status(200)
        .json({ message: "All teachers are found here", teachers });
    }
  } catch (err) {
    res.status(501).json(err);
  }
};
//get one teacher by id
const getOneTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      res
        .status(404)
        .json({ message: "no teacher with this id found in the db" });
    } else {
      res.status(200).json({ teacher });
    }
  } catch (err) {
    res.status(501).json(err);
  }
};
//create one teacher
const createTeacher = async (req, res) => {
  try {
    const { first_name, last_name, department, subjects } = req.body;
    const teacher = await Teacher.create({
      first_name,
      last_name,
      department,
      subjects,
    });
    res
      .status(201)
      .json({ message: "New Teacher added successfully", teacher });
  } catch (err) {
    res.status(501).json(err);
  }
};
//update a teacher

const updateTeacher = async (req, res) => {
  try {
    const { first_name, last_name, department, subjects } = req.body;
    const { id } = req.params;
    const teacher = await Teacher.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        department,
        subjects,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "New Teacher added successfully", teacher });
  } catch (err) {
    res.status(501).json(err);
  }
};
//delete a teacher

const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findByIdAndDelete(id);
    if (!teacher) {
      res
        .status(404)
        .json({ message: "no teacher with this id found in the db" });
    } else {
      res.status(200).json({ message: "Teacher record deleted successfully" });
    }
  } catch (err) {
    res.status(501).json(err);
  }
};

module.exports = {
  getAllTeachers,
  getOneTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
