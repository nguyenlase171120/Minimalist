const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Routes modules
const authRoutes = require("./routes/auth/AuthRoutes");
const postRoutes = require("./routes/post/PostRoutes");

//Create app to run server with
const app = express();

//Modules config
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use("/v1/auth", authRoutes);
app.use("/posts", postRoutes);

//Connect DB and listen port

mongoose.connect(process.env.MONGOOSE_URI, () => {
  console.log("Connect DB successfully");
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running...");
  });
});
