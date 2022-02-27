const jwt = require("jsonwebtoken");

const MiddlewareController = {
  //Verify tokens
  verifyToken: async (req, res, next) => {
    try {
      const tokenBearer = await req.header("Authorization");
      const token = await tokenBearer.split(" ")[1];
      //compare jwt token

      await jwt.verify(token, process.env.ACCESS_TOKEN, (err) => {
        if (err) {
          res
            .status(401)
            .json({ success: false, message: "You are not allowed that" });
        }
      });

      res.status(200).json({ token });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error !!" });
    }
  },
};
module.exports = MiddlewareController;
