const { verifyToken } = require("../../controllers/MiddlewareController");
const PostController = require("../../controllers/post/PostController");

const router = require("express").Router();

router.post("/register-post", verifyToken, PostController.registerPost);
router.get("/get-all-posts", verifyToken, PostController.getAllPosts);
router.get("/getPost/:id", verifyToken, PostController.getPostById);
router.get(
  "/get-post-pagination",
  verifyToken,
  PostController.getPostPagination
);
router.delete("/deletePost/:id", verifyToken, PostController.deletePostById);
router.get(
  "/getCategory/:category",
  verifyToken,
  PostController.getPostByCategory
);

module.exports = router;
