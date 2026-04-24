const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// CREATE STUDENT
router.post("/", async (req, res) => {
  try {
    const { name, email, course } = req.body;

    if (!name || !email || !course) {
      return res.status(400).json({
        message: "Name, email and course are required",
      });
    }

    const student = await Student.create({ name, email, course });

    res.status(201).json({
      message: "Student record created successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating student record",
      error: error.message,
    });
  }
});

// READ ALL STUDENTS
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Students fetched successfully",
      count: students.length,
      students,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching students",
      error: error.message,
    });
  }
});

// READ SINGLE STUDENT
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student fetched successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching student",
      error: error.message,
    });
  }
});

// UPDATE STUDENT
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student record updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating student",
      error: error.message,
    });
  }
});

// DELETE STUDENT
router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student record deleted successfully",
      deletedStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting student",
      error: error.message,
    });
  }
});

module.exports = router;