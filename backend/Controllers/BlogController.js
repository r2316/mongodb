
const mongoose = require("mongoose");
const blogModel = require("../models/BlogModel");
const fs = require("fs");
const path = require("path");

// Add a new blog
exports.addBlog = async (blog) => {
  let msg = "Blog not created";

  const newBlog = new blogModel({
    title: blog.title,
    content: blog.content,
    category: blog.category,
    imageUrl: blog.imageUrl,
    user_id: blog.user_id,
  });

  console.log("Creating Blog:", newBlog);

  await newBlog.save()
    .then(() => {
      msg = "Blog created";
    })
    .catch((err) => {
      console.error("Error creating blog:", err);
    });

  return msg;
};

// Get all blogs
exports.getBlogs = async () => {
  let data = [];
  await blogModel.find()
    .then((d) => data = d)
    .catch((err) => console.error("Error fetching blogs:", err));
  return data;
};

// Get blogs by a specific user
exports.getBlogsByUser = async (user_id) => {
  let data = [];
  await blogModel.find({ user_id: user_id })
    .sort({ createdAt: -1 })
    .then((d) => data = d)
    .catch((err) => console.error("Error fetching user blogs:", err));
  return data;
};

// Update blog
exports.updateBlog = async (id, updatedData) => {
  let msg = "Blog not updated";

  try {
    const blog = await blogModel.findById(id);
    if (!blog) {
      console.error("Blog not found");
      return msg;
    }

    // Delete old image if a new one was uploaded
    if (updatedData.imageUrl && blog.imageUrl) {
      const oldImagePath = path.join(__dirname, "..", blog.imageUrl);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    blog.title = updatedData.title;
    blog.content = updatedData.content;
    blog.category = updatedData.category;
    blog.user_id = updatedData.user_id;
    if (updatedData.imageUrl) {
      blog.imageUrl = updatedData.imageUrl;
    }

    await blog.save();
    msg = "Blog updated";
  } catch (err) {
    console.error("Error updating blog:", err);
  }

  return msg;
};

// Delete blog
exports.deleteBlog = async (id) => {
  let msg = "Blog not deleted";

  try {
    const blog = await blogModel.findById(id);
    if (!blog) {
      console.error("Blog not found");
      return msg;
    }

    // Delete image file if it exists
    if (blog.imageUrl) {
      const imagePath = path.join(__dirname, "..", blog.imageUrl);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await blogModel.findByIdAndDelete(id);
    msg = "Blog deleted";
  } catch (err) {
    console.error("Error deleting blog:", err);
  }

  return msg;
};
