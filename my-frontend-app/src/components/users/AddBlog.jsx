/*
import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/apidetails";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Computer Science");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const res = await axios.post(`${API_URL}blogs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        setMessage("Blog added successfully!");
    
        setTitle("");
        setContent("");
        setCategory("Computer Science");
        setImage(null);
        
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to add blog. Please try again.");
    }
  };

  

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Add New Blog</h2>
      {message && (
        <p
          style={{
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
            textAlign: "center",
            fontWeight: "bold",
            color: message.startsWith(" ") ? "#155724" : "#721c24",
            backgroundColor: message.startsWith(" ") ? "#d4edda" : "#f8d7da",
            border: `1px solid ${
              message.startsWith(" ") ? "#c3e6cb" : "#f5c6cb"
            }`,
          }}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: 10, marginBottom: 15 }}
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          style={{ width: "100%", padding: 10, marginBottom: 15, resize: "vertical" }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 15 }}
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
          required
          style={{ width: "100%", padding: 10, marginBottom: 15 }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: 16,
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}
*/
import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/apidetails";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Computer Science");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const res = await axios.post(`${API_URL}blogs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        setMessage("Blog added successfully!");

        // Reset form fields
        setTitle("");
        setContent("");
        setCategory("Computer Science");
        setImage(null);

        // Clear message after 3 seconds
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to add blog. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Add New Blog</h2>

      {message && (
        <p
          style={{
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
            textAlign: "center",
            fontWeight: "bold",
            color: message.startsWith("Blog added") ? "#155724" : "#721c24",
            backgroundColor: message.startsWith("Blog added") ? "#d4edda" : "#f8d7da",
            border: `1px solid ${message.startsWith("Blog added") ? "#c3e6cb" : "#f5c6cb"}`,
          }}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: 10, marginBottom: 15 }}
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          style={{ width: "100%", padding: 10, marginBottom: 15, resize: "vertical" }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 15 }}
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
          required
          style={{ width: "100%", padding: 10, marginBottom: 15 }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: 16,
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}
