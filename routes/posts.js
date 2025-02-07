const express = require("express");
const Students = require("../models/posts");
const Student = require("../models/posts");

const app = express.Router();

app.post("/api/students", async (req, res) => {
  try {
    const student = await Students.create(req.body);
    res.status(200).json(student);
    // return res.status(200).json({
    //   success: "Post saved successfully.",
    //   post: student,
    // });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

app.get("/api/students", async (req, res) => {
  try {
    const students = await Students.find({});
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.get("/api/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const students = await Students.findById(id);
    res.status(200).json(students);

    // const post = await Posts.findByIdAndUpdate(req.params.id, {
    //   $set: req.body,
    // });
    // if (!post) {
    //   return res.status(404).json({ error: "Post not found" });
    // }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put("/api/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body);
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }
    // res.status(200).json(student);
    const updateStudent = await Student.findById(id);
    res.status(200).json(updateStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// app.delete("/post/delete/:id", async (req, res) => {
//   try {
//     const deletedPost = await Posts.findByIdAndRemove(req.params.id).exec();
//     if (!deletedPost) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     return res.status(200).json({
//       message: "Deleted successfully",
//       deletedPost,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       error: error.message,
//     });
//   }
// });

module.exports = app;
