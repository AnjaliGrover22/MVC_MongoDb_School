const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minLength: [2, "min length is 2 characters"],
    maxLength: [100, "max length is 100 characters"],
  },
  last_name: {
    type: String,
    required: true,
    minLength: [2, "min length is 2 characters"],
    maxLength: [100, "max length is 100 characters"],
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please Enter a valid Email",
    ],
  },
  username: {
    type: String,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
