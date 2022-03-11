const UserModelRegister = require("../../models/auth/UserAuth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthController = {
  //Register new user
  registerNewUser: async (req, res) => {
    try {
      const { userEmail, username } = req.body;

      //Check account is existed
      const accountExisted = await UserModelRegister.findOne({ userEmail });
      if (accountExisted)
        return res
          .status(403)
          .json({ success: false, message: "Account already exists" });

      // //Hashed password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      //All good
      const newUser = new UserModelRegister({
        userEmail,
        username,
        password: hashedPassword,
      });

      //Split password from user object
      const { password, ...others } = newUser._doc;

      //Save new user to database
      await newUser.save();

      return res.status(200).json({
        success: true,
        message: "Register successfully",
        data: { ...others },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error !!" });
    }
  },

  //Login user
  loginUser: async (req, res) => {
    try {
      const { userEmail } = req.body;

      //Check account is't registration
      const userExisted = await UserModelRegister.findOne({
        userEmail,
      });

      if (!userExisted)
        res
          .status(403)
          .json({ success: false, message: "Can't found this account !!" });

      //Encrypt password of user
      const encryptedPassword = await bcrypt.compare(
        req.body.password,
        userExisted.password
      );
      if (!encryptedPassword)
        res
          .status(403)
          .json({ success: false, message: "Password is invalid" });

      //Split password from user
      const { password, ...others } = userExisted._doc;

      //Handle token
      const access_token = await jwt.sign(
        { userId: userExisted.id },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "30d",
        }
      );

      //All good
      return res.status(200).json({
        success: true,
        message: "Login successfully",
        data: { ...others },
        access_token,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error login !!" });
    }
  },

  //Get All users
  getAllUser: async (req, res) => {
    try {
      const listUser = await UserModelRegister.find();
      if (!listUser)
        res
          .status(401)
          .json({ success: false, message: "You are not allowed that" });

      //All good
      res.status(200).json({
        success: true,
        message: "Get list user successfully",
        data: listUser,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  //Delete user by id
  deleteUserById: async (req, res) => {
    try {
      const id = req.params.id;

      //Check user is valid or not
      await UserModelRegister.findById(id, (err) => {
        res
          .status(403)
          .json({ success: false, message: "User id is invalid inside !!" });
      });

      //All Good
      res
        .status(200)
        .json({ success: true, message: "Delete successfully", data: user });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error delete" });
    }
  },
};

module.exports = AuthController;
