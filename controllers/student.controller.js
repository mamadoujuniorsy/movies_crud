const Student = require('../models/student.model.js');

const getStudents = async (req, res) =>{
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getStudent = async (req, res) =>{
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createStudent = async (req, res) =>{
  try {
    const { name, course, registered } = req.body;
    const student = await Student.create({ name, course, registered }); // Création d'un nouvel étudiant avec les données extraites
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateStudent = async (req, res) =>{
  try {
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true }); // Utilisation de l'option { new: true } pour renvoyer le document mis à jour
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteStudent = async (req, res) =>{
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Suppression réussie" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
};
