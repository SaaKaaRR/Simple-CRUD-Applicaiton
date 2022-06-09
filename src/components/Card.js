import axios from "axios";
import React from "react";

export default function Card({ id, title, message, mapDeletedData }) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{message}</p>
        <button
          class="btn btn-primary"
          onClick={() => {
            axios
              .delete(`http://localhost:5000/posts?id=${id}`)
              .then((data) => {
                mapDeletedData(id);
                
              })
              .catch((error) => {
                alert("Something went wrong");
              });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
