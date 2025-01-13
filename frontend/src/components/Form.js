import React, { useState } from "react";
import axios from "axios"; // Ensure axios is correctly imported

const Form = () => {
  const [formData, setFormData] = useState({
    username: "", // Adjusted for registration
    password: "", // Added password field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      alert("User registered successfully");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold mb-4">Register User</h1>
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full border px-3 py-2"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Form;
