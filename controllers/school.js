const School = require("../schemas/School.js");

//get all school names

const getAllSchools = async (req, res) => {
  try {
    const Schools = await School.find();
    if (Schools.length) {
      res.status(200).send({ Schools });
    } else {
      res.status(404).send({ message: "No Schools in the db" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//getSchoolbyid

const getSchoolById = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await School.findById(id);
    if (school) {
      res.status(200).json({ school });
    } else {
      res
        .status(404)
        .json({ message: "No School Entry with this id in the db" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//createschool

const createSchool = async (req, res) => {
  try {
    const {
      school_name,
      number_of_staff,
      number_of_students,
      established_year,
      address,
    } = req.body;
    const newSchool = await School.create({
      school_name,
      number_of_staff,
      number_of_students,
      established_year,
      address,
    });

    res
      .status(200)
      .json({ message: "New School created successfully", newSchool });
  } catch (error) {
    res.status(500).json(error);
  }
};

//update by ID

const updateSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      school_name,
      number_of_staff,
      number_of_students,
      established_year,
      address,
    } = req.body;
    const updatedSchool = await School.findByIdAndUpdate(
      id,
      {
        school_name,
        number_of_staff,
        number_of_students,
        established_year,
        address,
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "your School updated successfully", updatedSchool });
  } catch (error) {
    res.status(500).json(error);
  }
};

//delete by id

const deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await School.findOneAndDelete(id);
    if (!school) {
      res.status(404).json({ message: " No School id found" });
    }
    res.status(200).json({ message: " School deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllSchools,
  getSchoolById,
  createSchool,
  updateSchool,
  deleteSchool,
};
