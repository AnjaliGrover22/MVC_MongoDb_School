const Student = require("../schemas/Student");

//get All Students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    if (!students.length) {
      res.status(200).json({ message: "No Student found in the DB" });
    } else {
      res.status(200).json({ students });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
//get one Student

const getOneStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (student) {
      return res.status(200).json({ student });
    }
    res.status(404).json({ message: "I did not find that student :(" });
  } catch (er) {
    res.status(500).json(er);
  }
};

//create a Student
const createStudent = async (req, res) => {
  try {
    const { first_name, last_name, email, username } = req.body;
    const student = await Student.create({
      first_name,
      last_name,
      email,
      username,
    });
    res.status(201).json({ message: "Student created successfully", student });
  } catch (er) {
    res.status(500).json(er);
  }
};

//edit a Student

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, username } = req.body;
    const student = await Student.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        email,
        username,
      },
      { new: true }
    );

    if (!student) {
      res.status(404).json({ message: "I dont know this student" });
    } else {
      res
        .status(200)
        .json({ message: "Student updated successfully", student });
    }
  } catch (er) {
    res.status(501).json(er);
  }
};

//delete a Student

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findOneAndDelete(id);
    if (!student) {
      res.status(404).json({ message: "No student found to delete" });
    } else {
      res.status(200).json({ message: "Student record deleted successfully" });
    }
  } catch (er) {
    res.status(501).json(er);
  }
};

module.exports = {
  getAllStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
