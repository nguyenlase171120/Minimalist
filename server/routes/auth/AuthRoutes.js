const AuthController = require("../../controllers/auth/AuthController");
const MiddlewareController = require("../../controllers/middleWareController");

const router = require("express").Router();

//Register ner user
router.post("/register", AuthController.registerNewUser);
router.post("/login", AuthController.loginUser);
router.get("/", MiddlewareController.verifyToken, AuthController.getAllUser);

module.exports = router;
