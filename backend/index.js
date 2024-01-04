const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.json({
    username,
    password,
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
