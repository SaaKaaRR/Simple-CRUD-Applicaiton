import PostMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
  try {
    const PostMessages = await PostMessage.find();
    res.status(200).json({ PostMessages });
    console.log("all posts displayed");
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  console.log(post);
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(200).json(newPost);
    console.log("post saved successfully");
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = (req, res) => {
  console.log("Welcome to the update posts");
};

export const deletePost = (req, res) => {
  const post = req.query.id;
  console.log(post);
  PostMessage.deleteOne({ _id: post }, (err, data) => {
    if (err)
      return res.json({
        msg: "Post couldnt be deleted",
      });
    res.json({
      msg: "Post deleted",
    });
  });
};
