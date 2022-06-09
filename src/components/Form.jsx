import React, { useState } from 'react'
import axios from "axios"
import Card from './Card'

function Form() {
  const [data,setData]= useState([])
  const getAllPosts = ()=>{
    axios.get("http://localhost:5000/posts").then((data)=>{
    
     setData(data.data.PostMessages)
    })
    .catch((err)=>{
      console.log("Error is",err)
    })
  }
  function mapDeletedData(id){
    const newData=data.filter((post)=>{
      return post._id!=id
    })
    setData(newData)
  }
  return (
    <div class ="container ml-3">
        <form action="http://localhost:5000/posts/" method= "post">
            <input type="text" name="creator" placeholder='Your Name'/>
            <input type="text" name="title" placeholder='Enter your title'/>
            <input type="text" name="message" placeholder='Type your post here'/>
            
            <button type="submit" class="btn btn-success" name="PostButton">Post</button>
        </form>

       
       <button class='btn btn-success' name='getPostButton' onClick={()=>getAllPosts()}>Get All Posts</button>
        {data.map((one)=>{
          return <Card id={one._id} title={one.title} message={one.message} mapDeletedData={mapDeletedData}/>
        })}
    </div>
  )
}

export default Form