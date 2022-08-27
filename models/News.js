const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: [true, "Please enter a title"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
    },
    date: Date,
    images:[{
      type: String,
      default: ''
  }],
    content: {
      type: String,
      required: [true, "Please enter the content"],
    },
    author: {
      type: String,
      required: [true, "Please enter the author"],
    },
    archiveDate: Date,
    archived: Boolean,
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);

module.exports = News;
