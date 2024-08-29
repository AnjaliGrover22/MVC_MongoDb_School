const mongoose = require("mongoose");
const TeacherSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minLength: [5, "min length is 5"],
    maxLength: [100, "max length is 100"],
  },
  last_name: {
    type: String,
    required: true,
    minLength: [5, "min length is 5"],
    maxLength: [100, "max length is 100"],
  },
  department: {
    type: String,
    required: true,
    minLength: [2, "min length is 2"],
    maxLength: [50, "max length is 100"],
  },
  subjects: {
    type: [String],
    required: true,
    validate: {
      validator: function (v) {
        return v.length >= 1 && v.length <= 3;
      },
      message: "Subjects must be between 1 and 3",
    },
  },
});

module.exports = mongoose.model("Teacher", TeacherSchema);
