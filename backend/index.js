const express = require("express");
const app = express();
const { Post } = require("./database");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  await Post.create({
    title: title,
    description: description,
  });
  res.send("Post created successfully");
});

app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.json({
    posts,
  });
});

app.post("/remove", async (req, res) => {
  await Post.deleteOne({ title: req.body.title });
  res.send("Post deleted successfully");
});

app.post("/update", async (req, res) => {
  await Post.updateOne(
    {
      title: req.body.title,
    },
    {
      title: req.body.newTitle,
      description: req.body.newDesc,
    }
  );
  res.send("Post updated successfully");
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
