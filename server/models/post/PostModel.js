const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    descriptionTrailer: {
      type: String,
      required: true,
    },
    description: [
      {
        titleDescription: {
          type: String,
        },
        subTitles: {
          type: String,
        },
        descriptionText: [
          {
            text: {
              type: String,
            },
            image: {
              type: String,
            },
            link: {
              type: String,
            },
          },
        ],
        linkProductDesc: [
          {
            text: {
              type: String,
            },
            link: {
              type: String,
            },
          },
        ],
      },
    ],
    linkYoutube: [
      {
        link: {
          type: String,
        },
      },
    ],
    linkProduct: [
      {
        text: {
          type: String,
        },
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "UserTable",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostTable", PostModel);
