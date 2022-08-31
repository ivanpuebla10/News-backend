const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: [true, "Please enter a title"],
      minlength: [ 10, 'Title must contain more than 10 characters']
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
      minlength: [ 100, 'Description must contain more than 50 characters']
    },
    date: Date,
    images:{
      type: Array,
      required: true,
      validate: [(value) => value.length > 0, 'Please insert 1-3 images'],
  },
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
    fetched: Boolean,
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);

module.exports = News;
