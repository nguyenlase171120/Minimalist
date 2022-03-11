const PostModel = require("../../models/post/PostModel");

const PostController = {
  //Register post
  registerPost: async (req, res) => {
    try {
      const {
        title,
        image,
        category,
        description,
        linkYoutube,
        linkProduct,
        descriptionTrailer,
      } = req.body;

      const newPosts = new PostModel({
        title,
        image,
        category,
        descriptionTrailer,
        description,
        linkYoutube,
        linkProduct,
        user: req.userId,
      });

      await newPosts.save();

      res.status(200).json({
        success: true,
        message: "Register new post successfully . Happy reading <3 ",
        data: newPosts,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error !! " });
    }
  },

  //Get all post
  getAllPosts: async (req, res) => {
    try {
      const listPosts = await PostModel.find();
      res.status(200).json({
        success: true,
        message: "Get posts successfully",
        data: listPosts,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error !! " });
    }
  },

  //Get post by id
  getPostById: async (req, res) => {
    try {
      const postId = req.params.id;
      const result = await PostModel.findOne({ id: postId });

      if (!result)
        res
          .status(404)
          .json({ success: false, message: "Can't found post id " });

      res
        .status(200)
        .json({ success: true, message: "Post detail", data: result });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error !! " });
    }
  },

  //Delete post by postId
  deletePostById: async (req, res) => {
    try {
      const postId = req.params.id;
      const result = await PostModel.findOneAndDelete({ id: postId });
      if (!result)
        res
          .status(403)
          .json({ success: false, message: "Can't delete this post" });

      res
        .status(200)
        .json({ success: true, message: "Delete post successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error !! " });
    }
  },

  //Get all post by category
  getPostByCategory: async (req, res) => {
    try {
      const category = req.params.category;
      const post = await PostModel.findOne({ category });

      if (!post)
        res
          .status(401)
          .json({ success: false, message: "Get post by category failed" });

      res.status(200).json({
        success: true,
        message: "Get post by category successfully",
        data: post,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  //Get posts by page and size
  getPostPagination: async (req, res) => {
    try {
      const { page, size } = req.query;

      if (!page) {
        page = 1;
      }

      if (!size) {
        size = 10;
      }

      const limit = Number(size);
      const skip = (page - 1) * 10;

      const listPosts = await PostModel.find()
        .limit(limit)
        .skip(skip)
        .sort("createdAt");

      if (!listPosts)
        res
          .status(404)
          .json({ success: false, message: "Can't get data of posts" });

      res.status(200).json({
        success: true,
        message: " Get list posts for page successfully ",
        data: listPosts,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

module.exports = PostController;
