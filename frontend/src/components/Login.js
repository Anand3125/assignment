import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("All fields are required");
      return;
    }
    navigate("/form");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-xl font-bold mb-4">Log in page screen2
            
        </h1>
      <form
        className="bg-white p-6 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full border px-3 py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
