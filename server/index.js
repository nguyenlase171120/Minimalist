const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Routes modules
const authRoutes = require("./routes/auth/AuthRoutes");

//Create app to run server with
const app = express();

//Modules config
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use("/v1/auth", authRoutes);

//Connect DB and listen port

mongoose.connect(process.env.MONGOOSE_URI, () => {
  console.log("Connect DB successfully");
  app.listen(5000, () => {
    console.log("Server is running...");
  });
});
