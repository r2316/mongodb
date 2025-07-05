/*const express = require("express")
const router = express.Router()
const multer = require("multer")
const fs = require("fs")
const blogController= require("../Controllers/BlogController")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = 'uploads/';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage: storage });
//for file saving end
router.post("/",upload.single('image'),async (req,res)=>
{
  // console.log(req.body)
     try {
    const { title, content, category,user_id } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const blog = {"title": title,"content": content,
         "category":category, "imageUrl":imageUrl,"user_id":user_id};
    
    let msg = await  blogController.addBlog(blog)

    res.status(201).json({ message: msg });
  } catch (err) {
    console.error('Error saving blog:', err);
    res.status(500).json({ error: 'Server error' });
  }
})
router.get("/",async (req,res)=>
{
  let data = await blogController.getBlogs();
  res.send(data)
})

// GET /blogs/user/:user_id - Get blogs by user ID
router.get("/user/:user_id", async (req, res) => {
  try {
    const userBlogs = await blogController.getBlogsByUser(req.params.user_id);
    res.status(200).json(userBlogs);
  } catch (err) {
    console.error("Error fetching user blogs:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router
*/
const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const blogController = require("../Controllers/BlogController");

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "uploads/";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });


router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, content, category, user_id } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const blog = {
      title,
      content,
      category,
      imageUrl,
      user_id,
    };

    const msg = await blogController.addBlog(blog);
    res.status(201).json({ message: msg });
  } catch (err) {
    console.error("Error saving blog:", err);
    res.status(500).json({ error: "Server error" });
  }
});


router.get("/", async (req, res) => {
  try {
    const data = await blogController.getBlogs();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ error: err });
  }
});


router.get("/user/:user_id", async (req, res) => {
  try {
    const userBlogs = await blogController.getBlogsByUser(req.params.user_id);
    res.status(200).json(userBlogs);
  } catch (err) {
    console.error("Error fetching user blogs:", err);
    res.status(500).json({ error: "Server error" });
  }
});


router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, content, category, user_id } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const updatedBlog = {
      title,
      content,
      category,
      user_id,
      ...(imageUrl && { imageUrl }),
    };

    const msg = await blogController.updateBlog(req.params.id, updatedBlog);
    res.status(200).json({ message: msg });
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ error: "Server error" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const msg = await blogController.deleteBlog(req.params.id);
    res.status(200).json({ message: msg });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

