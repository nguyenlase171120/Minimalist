const jwt = require("jsonwebtoken");

const MiddlewareController = {
  //Verify tokens
  verifyToken: async (req, res, next) => {
    try {
      const tokenBearer = await req.header("Authorization");
      const token = await tokenBearer.split(" ")[1];
      //compare jwt token

      await jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
          res
            .status(401)
            .json({ success: false, message: "You are not allowed that" });
        }
        req.userId = user.userId;
      });

      //All goods
      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error middleware !!",
      });
    }
  },
};
module.exports = MiddlewareController;
