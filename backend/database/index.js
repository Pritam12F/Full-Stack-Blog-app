const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pritam12f:IotzqDm6nf6V4wyb@cluster0.w5m2bxm.mongodb.net/bloggingapp2"
);

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = {
  Post,
};
