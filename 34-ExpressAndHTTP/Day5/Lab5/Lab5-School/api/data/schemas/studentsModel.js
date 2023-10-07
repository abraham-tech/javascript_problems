const mongoose = require("mongoose");
require("dotenv").config();

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  grade: Number,
});
mongoose.model(process.env.STUDENT, studentSchema);
module.exports = mongoose.model(process.env.STUDENT, studentSchema);
