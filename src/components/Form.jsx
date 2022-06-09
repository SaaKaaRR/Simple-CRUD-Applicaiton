import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

function Form() {
  const BackendURL = "http://localhost:5000/posts";
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
  function SendPost() {
    const postData = new FormData();
    postData.append("name", "Sakar");
    console.log({postData});
    axios
      .post(BackendURL, {
        data: postData,
      })
      .then(() => {
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
        <input type="text" name="creator" placeholder="Your Name" />
        <input type="text" name="title" placeholder="Enter your title" />
        <input type="text" name="message" placeholder="Type your post here" />
      </form>
      <button
        type="submit"
        class="btn btn-success"
        name="PostButton"
        onClick={SendPost}
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
