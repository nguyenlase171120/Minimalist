const AuthController = require("../../controllers/auth/AuthController");
const MiddlewareController = require("../../controllers/middleWareController");

const router = require("express").Router();

// user routes
router.post("/register", AuthController.registerNewUser);
router.post("/login", AuthController.loginUser);
router.get(
  "/getAll-user",
  MiddlewareController.verifyToken,
  AuthController.getAllUser
);
router.delete(
  "/:id",
  MiddlewareController.verifyToken,
  AuthController.deleteUserById
);

module.exports = router;
