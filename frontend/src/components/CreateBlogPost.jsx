import axios from "axios";
import { useState } from "react";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(ev) => {
          setTitle(ev.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="description"
        onChange={(ev) => {
          setDescription(ev.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          axios
            .post("http://localhost:3000/", {
              title: title,
              description: description,
            })
            .then((res) => {
              alert(res.data);
            });
        }}
      >
        Create Post
      </button>
    </div>
  );
}
