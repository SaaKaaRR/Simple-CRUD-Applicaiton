import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

function Form() {
 
  const BackendURL = "http://localhost:5000/posts";
  const [data, setData] = useState([]);
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
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
  function SendPost(e) {
    e.preventDefault();
    const dataToBeSent = {
      creator,
      title,
      msg,
    };
    console.log(dataToBeSent);

    axios
      .post(BackendURL, dataToBeSent)
      .then((data) => {
        console.log(data);
        console.log("post done");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  function mapDeletedData(id) {
    const newData = data.filter((post) => {
      return post._id !== id;
    });
    setData(newData);
  }
  return (
    <div class="container ml-3">
      <form id="postForm">
        <input
          type="text"
          name="creator"
          required={true}
          onChange={(e) => setCreator(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="text"
          name="title"
          required={true}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your title"
        />
        <input
          type="text"
          name="message"
          required={true}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type your post here"
        />
      </form>
      <button
        type="submit"
        class="btn btn-success"
        name="PostButton"
        onClick={(e) => SendPost(e)}
      >
        Post
      </button>

      <button
        class="btn btn-success"
        name="getPostButton"
        onClick={() => getAllPosts()}
      >
        Get All Posts
      </button>
      {data.map((one) => {
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
