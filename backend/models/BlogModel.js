const mongoose = require("mongoose")
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  imageUrl: String, 
  user_id: {
    type:  String,
    
    required: true,
    
  },
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog

