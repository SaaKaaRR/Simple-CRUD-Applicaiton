import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

function Form() {
  const [data, setData] = useState([]);
  const getAllPosts = () => {
    axios
      .get("http://localhost:5000/posts")
      .then((data) => {
        setData(data.data.PostMessages);
      })
      .catch((err) => {
        console.log("Error is", err);
      });
  };
  function mapDeletedData(id) {
    const newData = data.filter((post) => {
      return post._id !== id;
    });
    setData(newData);
  }
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  function postPost() {
    axios.post("http://localhost:5000/posts", {
      creator: creator,
      title: title,
      message: message,
    });
    setCreator("");
    setTitle("");
    setMessage("");
    getAllPosts();
  }
  return (
    <div class="container ml-3">
      <form action="http://localhost:5000/posts/" method="post">
        <input
          type="text"
          name="creator"
          placeholder="Your Name"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
        />
        <input
          type="text"
          name="title"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="message"
          placeholder="Type your post here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <button class="btn btn-success" name="PostButton" onClick={postPost}>
        Post
      </button>
      <button
        class="btn btn-success"
        name="getPostButton"
        onClick={() => getAllPosts()}
      >
        Get All Posts
      </button>

      {data.reverse.map((one) => {
        return (
          <Card
            id={one._id}
            title={one.title}
            message={one.message}
            mapDeletedData={mapDeletedData}
          />
        );
      })}
    </div>
  );
}

export default Form;
