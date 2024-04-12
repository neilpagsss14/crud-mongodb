const express = require("express");
const mongoose = require("mongoose");

const app = express();
//import
const postRoutes = require("./routes/posts");

//app middleware
app.use(express.json());

//route midleware
app.use(postRoutes);
const PORT = 4000;

mongoose
  .connect(
    "mongodb+srv://neilpagsss14:xNbvqvFYdNALyHUy@crud-project.5bbd40d.mongodb.net/?retryWrites=true&w=majority&appName=crud-project"
  )
  .then(() => {
    console.log("Database Connection Successful");
    app.listen(PORT, () => {
      console.log("App is running....");
    });
  })
  .catch((err) => {
    console.log("Database Connection was Unsuccessfull", err);
  });
