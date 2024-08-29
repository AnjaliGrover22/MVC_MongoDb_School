const mongoose = require("mongoose");
const SchoolSchema = new mongoose.Schema({
  school_name: {
    type: String,
    required: true,
    minLength: [15, "min length is 15"],
    maxLength: [50, "max length is 100"],
    validate: {
      validator: function (v) {
        return /School$/.test(v);
      },
      message: "School name must end with 'School'",
    },
  },

  number_of_staff: {
    type: Number,
    required: true,
    min: [1, "There must be atleast one student"],
    validate: {
      validator: Number.isInteger,
      message: "Number of staff must be an integer",
    },
  },
  number_of_students: {
    type: Number,
    required: true,
    min: [1, "There must be atleast 1 student"],
    validate: {
      validator: Number.isInteger,
      message: "Number of student must be an integer",
    },
  },
  established_year: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        const currentYear = new Date().getFullYear();
        return v > 1800 && v <= currentYear; // Ensure the year is realistic
      },
      message: "Established year must be between 1800 and the current year",
    },
  },

  address: {
    type: String,
    required: true,
    minLength: [10, "Address must be at least 10 characters long"],
    maxLength: [100, "Address can be up to 100 characters long"],
  },
});

module.exports = mongoose.model("School", SchoolSchema);
