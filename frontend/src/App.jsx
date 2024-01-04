import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { CreatePost } from "./components/CreateBlogPost";

function App() {
  const [posts, setPosts] = useState([]);

  axios.get("http://localhost:3000/").then((res) => {
    setPosts(res.data.posts);
  });
  return (
    <div>
      <CreatePost></CreatePost>
      <br></br>
      <br></br>
      <div>
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <button
                onClick={function () {
                  const newTitle = prompt("Enter new title of post");
                  const newDesc = prompt("Enter new description of post");
                  axios
                    .post("http://localhost:3000/update", {
                      title: post.title,
                      newTitle,
                      newDesc,
                    })
                    .then((res) => {
                      alert(res.data);
                    });
                }}
              >
                Update Post
              </button>
              <button
                onClick={function () {
                  axios
                    .post("http://localhost:3000/remove", { title: post.title })
                    .then((res) => {
                      alert(res.data);
                    });
                }}
              >
                Remove Post
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
