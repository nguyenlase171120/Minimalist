const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Register user model
const UserModelRegister = new Schema(
  {
    userEmail: {
      type: String,
      required: true,

      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserTable", UserModelRegister);
