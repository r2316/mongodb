
 /*import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API_URL } from "../../config/apidetails";

export default function Allblogs() {
  const [blogsUI, setBlogsUI] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(API_URL + "blogs");
        const response = await axios.get(API_URL + "blogs");
        console.log(response.data);

        const ui = response.data.map((blog) => (
          <div
            key={blog._id}
            className="text-center border-1 border-green-300 p-4 m-2"
          >
            <div className="font-bold">{blog.title}</div>
            <div>
              <img
                src={`http://localhost:8080/${blog.imageUrl}`}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
            </div>
            <div>{blog.category}</div>
          </div>
        ));

        setBlogsUI(ui);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-4">All Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {blogsUI}
      </div>
    </div>
  );
}
*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/apidetails';

export default function Allblogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

 const categories = [
  'Computer Science',
  'Astrology',
  'Cooking',
  'Music',
  'Politics'
];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + 'blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  // Filter blogs by selected category if any
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-center mb-4">All Blogs</h2>

      =
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded border ${
              selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory(null)}
          className="px-4 py-2 rounded border bg-yellow-300"
        >
          Show All
        </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="text-center border border-green-300 p-4 rounded shadow"
            >
              <div className="font-bold mb-2">{blog.title}</div>
              <img
                src={`http://localhost:8080/${blog.imageUrl}`}
                alt={blog.title}
                className="w-full h-56 object-cover mb-2"
              />
              <div className="text-sm text-gray-500">{blog.category}</div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No blogs found for this category.</p>
        )}
      </div>
    </div>
  );
}
*/

//with all view//
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/apidetails';

export default function Allblogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null); // For view all

  const categories = [
    'Computer Science',
    'Astrology',
    'Cooking',
    'Music',
    'Politics'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + 'blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-center mb-4">All Blogs</h2>

      
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded border ${
              selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory(null)}
          className="px-4 py-2 rounded border bg-yellow-300"
        >
          Show All
        </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="text-center border border-green-300 p-4 rounded shadow"
            >
              <div className="font-bold mb-2">{blog.title}</div>
              <img
                src={`http://localhost:8080/${blog.imageUrl}`}
                alt={blog.title}
                className="w-full h-56 object-cover mb-2"
              />
              <div className="text-sm text-gray-500 mb-2">{blog.category}</div>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View All
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No blogs found for this category.</p>
        )}
      </div>

     
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative shadow-lg">
            <button
              className="absolute top-2 right-4 text-xl text-gray-500 hover:text-red-500"
              onClick={() => setSelectedBlog(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-2">{selectedBlog.title}</h3>
            <img
              src={`http://localhost:8080/${selectedBlog.imageUrl}`}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="mb-2 text-gray-700">
              <strong>Category:</strong> {selectedBlog.category}
            </p>
            <div className="text-gray-800 whitespace-pre-line">{selectedBlog.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/apidetails';

export default function Allblogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const categories = ['Computer Science', 'Astrology', 'Cooking', 'Music', 'Politics'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + 'blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Explore All Blogs</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium shadow-sm border transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-blue-100 text-gray-800'
            }`}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory(null)}
          className="px-5 py-2 rounded-full text-sm font-medium shadow-sm border bg-yellow-400 text-white hover:bg-yellow-500"
        >
          Show All
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={`https://mongodb-ldju.vercel.app${blog.imageUrl}`}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{blog.category}</p>
                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded"
                >
                  View All
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No blogs found for this category.
          </p>
        )}
      </div>

      {/* Modal / Detailed View */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center overflow-auto pt-20">
          <div className="bg-white max-w-2xl w-full p-6 rounded-lg relative shadow-xl animate-fade-in">
            <button
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
              onClick={() => setSelectedBlog(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">{selectedBlog.title}</h3>
            <img
              src={`http://localhost:8080${selectedBlog.imageUrl}`}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="mb-3 text-sm text-gray-500">
              <strong>Category:</strong> {selectedBlog.category}
            </p>
            <div className="text-gray-800 whitespace-pre-line">{selectedBlog.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}
