/*
import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/apidetails';
import { loginUser } from '../../slices/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errs.email = 'Invalid email address.';
    }
    if (!formData.password || formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const response = await axios.post(`${API_URL}Registration/login`, formData);
      if (response.data.msg === "success") {
        console.log(response.data.user._id)
        dispatch(loginUser(response.data.user._id));
        navigate("/userHome");
      } else {
        setServerMessage(response.data.msg || "Login failed");
      }
    } catch (error) {
      setServerMessage(error.response?.data?.msg || 'Login failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">User Login</h2>
      {serverMessage && <div className="mb-4 text-center text-sm text-blue-600">{serverMessage}</div>}
      <form onSubmit={handleSubmit}>
       
        <div className="mb-4">
          <label className="block font-medium">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

    
        <div className="mb-6">
          <label className="block font-medium">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400" />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}
  */
 import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/apidetails';
import { loginUser } from '../../slices/Userslice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errs.email = 'Invalid email address.';
    }
    if (!formData.password || formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const response = await axios.post(`${API_URL}Registration/login`, formData);
      if (response.data.msg === "success") {
        dispatch(loginUser(response.data.user._id));
        navigate("/userHome");
      } else {
        setServerMessage(response.data.msg || "Login failed");
      }
    } catch (error) {
      setServerMessage(error.response?.data?.msg || 'Login failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">User Login</h2>
      {serverMessage && <div className="mb-4 text-center text-sm text-blue-600">{serverMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

