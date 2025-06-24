const blogModel = require("../models/BlogModel")
exports.addBlog=async (blog)=>
{
    let msg = "blog not created "
    let newblog = new blogModel(
        {
            title: blog.title,
  content: blog.content,
  category: blog.category,
  imageUrl:blog.imageUrl,
        })
    await newblog.save()
    .then(()=>msg = "blog created")
return msg 
}
exports.getBlogs=async ()=>
{
    let data = [];
await blogModel.find()
.then((d)=>data = d)
return data
}

