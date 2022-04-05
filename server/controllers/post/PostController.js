const PostModel = require("../../models/post/PostModel");

const PostController = {
  //Register post
  registerPost: async (req, res) => {
    try {
      const {
        title,
        image,
        category,
        tag,
        description,
        linkYoutube,
        linkProduct,
        descriptionTrailer,
      } = req.body;

      const newPosts = new PostModel({
        title,
        image,
        category,
        tag,
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
      const result = await PostModel.findOne({ _id: postId });

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
      const categoryParam = req.params.category;
      const listPosts = await PostModel.find();
      const newArray = [];

      listPosts.map((post) => {
        const subListPost = post.category.split(", ");

        if (subListPost != null) {
          subListPost.map((post2) => {
            const result = newArray.includes(post2);

            if (!result) {
              if (post2 === categoryParam) {
                newArray.push(post);
              }
            }
          });
        }
      });

      if (!categoryParam)
        res
          .status(401)
          .json({ success: false, message: "Get post by category failed" });

      res.status(200).json({
        success: true,
        message: "Get post by category successfully",
        data: newArray,
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

  getPostsRelated: async (req, res) => {
    try {
      const { title, category } = req.query;

      const listPost = await PostModel.find();

      if (listPost.length > 0) {
        res.status(200).json({
          success: true,
          message: "Get related posts successfully",
          data: listPost,
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  handleCoverMonth: (month) => {
    switch (month) {
      case "1": {
        return "January";
      }
      case "2": {
        return "February";
      }
      case "3": {
        return "March";
      }
      case "4": {
        return "April";
      }
      case "5": {
        return "May";
      }
      case "6": {
        return "June";
      }
      case "7": {
        return "July";
      }
      case "8": {
        return "August";
      }
      case "9": {
        return "September";
      }
      case "10": {
        return "October";
      }
      case "11": {
        return "November";
      }
      case "12": {
        return "December";
      }
    }
  },

  //Get post by archives
  getPostsByArchives: async (req, res) => {
    try {
      const archiveParam = req.params.archives;
      const archiveArray = archiveParam.split(" ");
      const monthParam = archiveArray[0];
      const yearParam = archiveArray[1];

      const listPosts = await PostModel.find();
      const newArray = [];
      if (listPosts) {
        listPosts.map((post) => {
          const dateArray = post.createdAt.toLocaleDateString().split("/");
          const yearSql = dateArray[2].trim();
          const monthNumber = dateArray[0].trim();
          const monthConvert = PostController.handleCoverMonth(monthNumber);

          if (monthConvert === monthParam && yearParam === yearSql) {
            newArray.push(post);
          }
        });
      }

      res.status(200).json({
        success: true,
        message: "Get posts by archives successfully ",
        data: newArray,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error at archives" });
    }
  },

  removeAccent: (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  },

  //Search post by title
  getPostsBySearch: async (req, res) => {
    try {
      const titleParam = req.params.title;
      const listPosts = await PostModel.find();
      const newArraySearch = [];

      if (!titleParam) {
        res.status(200).json({
          success: true,
          message: "Get post successfully",
          data: listPosts,
        });
      } else {
        listPosts.map((post) => {
          const title = post.title;
          const titleRemoveAccent = PostController.removeAccent(title);
          const result = titleRemoveAccent
            .toLowerCase()
            .includes(titleParam.toLowerCase());

          if (result) {
            newArraySearch.push(post);
          }
        });

        res.status(200).json({
          success: true,
          message: "search title successfully ",
          data: newArraySearch,
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  //Get post by tag name
  getPostsByTag: async (req, res) => {
    try {
      const tagName = req.params.tagName;
      const listTags = await PostModel.find();
      const newArray = [];

      if (listTags) {
        listTags.map((post) => {
          const tag = post.tag;
          if (tag) {
            const listTagsDetail = tag.split(", ");
            listTagsDetail.map((post2) => {
              if (tagName === post2.toLowerCase().trim()) {
                newArray.push(post);
              }
            });
          }
        });

        return res.status(200).json({
          success: true,
          message: "Get data by tag success",
          data: newArray,
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

module.exports = PostController;
