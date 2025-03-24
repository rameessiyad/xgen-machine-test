import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        CRES Login
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Username</label>
          <input
            type="text"
            name="username"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter admin"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-violet-600 text-white p-2 rounded-md hover:bg-violet-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
