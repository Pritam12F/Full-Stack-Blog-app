const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pritam12f:IotzqDm6nf6V4wyb@cluster0.w5m2bxm.mongodb.net/bloggingapp"
);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  individualPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  postedBy: "",
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Post = mongoose.model("Post", postSchema);

module.exports = {
  User,
  Admin,
  Post,
};
