import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/apidetails";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const user_id = useSelector((state) => state.user.user_id);
  const navigate = useNavigate();

 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Computer Science");
  const [image, setImage] = useState(null);

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [userBlogs, setUserBlogs] = useState([]);

 
  const [editingBlogId, setEditingBlogId] = useState(null);

  useEffect(() => {
    if (!user_id) {
      navigate("/login");
    } else {
      fetchUserBlogs();
    }
  }, [user_id]);

  const fetchUserBlogs = async () => {
    try {
      const res = await axios.get(`${API_URL}blogs/user/${user_id}`);
      setUserBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch user blogs:", err);
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("Computer Science");
    setImage(null);
    setEditingBlogId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !category || (!image && editingBlogId === null)) {
      setMessage("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    if (image) formData.append("image", image);
    formData.append("user_id", user_id);

    try {
      let res;
      if (editingBlogId) {
        // Update existing blog
        res = await axios.put(`${API_URL}blogs/${editingBlogId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        // Add new blog
        res = await axios.post(`${API_URL}blogs`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin":"*"
          },
        });
      }

      if (res.status === 200 || res.status === 201) {
        setMessage(editingBlogId ? "Blog updated successfully!" : "Blog added successfully!");
        setSubmitted(true);

        resetForm();
        fetchUserBlogs();

        setTimeout(() => {
          setMessage("");
          setSubmitted(false);
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      setMessage(editingBlogId ? "Failed to update blog." : "Failed to add blog. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`${API_URL}blogs/${id}`);
        setMessage("Blog deleted successfully!");
        fetchUserBlogs();

        setTimeout(() => {
          setMessage("");
        }, 3000);
      } catch (err) {
        console.error("Delete failed:", err);
        setMessage("Failed to delete blog.");
      }
    }
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setCategory(blog.category);
    setImage(null); // User must upload new image if they want to change it
    setEditingBlogId(blog._id);
  };

  const handleCancelEdit = () => {
    resetForm();
    setMessage("");
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20, color: "#007bff" }}>
        {editingBlogId ? "Update Blog" : "Add New Blog"}
      </h2>

      {message && (
        <p
          style={{
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
            textAlign: "center",
            fontWeight: "bold",
            color: message.includes("successfully") ? "#155724" : "#721c24",
            backgroundColor: message.includes("successfully") ? "#d4edda" : "#f8d7da",
            border: `1px solid ${message.includes("successfully") ? "#c3e6cb" : "#f5c6cb"}`,
          }}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} encType="multipart/form-data" style={{ marginBottom: 40 }}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            borderRadius: 5,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            borderRadius: 5,
            border: "1px solid #ccc",
            fontSize: 16,
            resize: "vertical",
          }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            borderRadius: 5,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        >
          <option value="Computer Science">Computer Science</option>
          <option value="Astrology">Astrology</option>
          <option value="Cooking">Cooking</option>
          <option value="Music">Music</option>
          <option value="Politics">Politics</option>
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 15,
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
          // required only if adding new blog
          required={!editingBlogId}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 14,
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: 16,
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {editingBlogId ? "Update Blog" : "Add Blog"}
        </button>
        {editingBlogId && (
          <button
            type="button"
            onClick={handleCancelEdit}
            style={{
              width: "100%",
              marginTop: 10,
              padding: 14,
              backgroundColor: "#6c757d",
              color: "#fff",
              fontSize: 16,
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {!submitted && user_id && (
        <p style={{ textAlign: "center", marginTop: 20, fontStyle: "italic", color: "#555" }}>
          <strong>User ID:</strong> {user_id}
        </p>
      )}

      <h3 style={{ marginTop: 40, fontSize: "1.5rem", borderBottom: "2px solid #007bff", paddingBottom: 10 }}>
        Your Blogs
      </h3>

      {userBlogs.length === 0 ? (
        <p style={{ color: "#777", marginTop: 10 }}>You haven't added any blogs yet.</p>
      ) : (
        <div style={{ marginTop: 20 }}>
          {userBlogs.map((blog) => (
            <div
              key={blog._id}
              style={{
                marginBottom: 30,
                padding: 20,
                borderRadius: 10,
                backgroundColor: "#f9f9f9",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ marginBottom: 10, color: "#333" }}>{blog.title}</h4>
              <p style={{ margin: "5px 0", color: "#555" }}>
                <strong>Category:</strong> {blog.category}
              </p>
              <p style={{ margin: "10px 0", color: "#666" }}>
                {blog.content.length > 100 ? blog.content.slice(0, 100) + "..." : blog.content}
              </p>
              {blog.imageUrl && (
                <img
                  src={`http://localhost:8080${blog.imageUrl}`}
                  alt={blog.title}
                  style={{
                    width: "50%",
                    maxHeight: 250,
                    objectFit: "cover",
                    borderRadius: 6,
                    marginTop: 10,
                  }}
                />
              )}

              <div style={{ marginTop: 15 }}>
                <button
                  onClick={() => handleEdit(blog)}
                  style={{
                    marginRight: 10,
                    padding: "8px 16px",
                    backgroundColor: "#ffc107",
                    border: "none",
                    borderRadius: 5,
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#dc3545",
                    border: "none",
                    borderRadius: 5,
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

