const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    date: Date,
    content: String,
    author: String,
    archiveDate: Date,
    archived: Boolean,
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);

module.exports = News;
