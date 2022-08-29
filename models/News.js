const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: [true, "Please enter a title"],
      maxlength: [ 40, 'Title should not contain more than 40 characters' ],
      minlength: [ 10, 'Title must contain more than 10 characters']
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
      maxlength: [ 100, 'Description should not contain more than 100 characters' ],
      minlength: [ 50, 'Description must contain more than 50 characters']
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
      minlength: [ 1000, 'Content must contain more than 1000 characters']
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
