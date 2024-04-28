const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
  {
    name: String,
    course: String,
    registered: Boolean,
  },
  { timestamps: true }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
