import React, { useState } from "react";

export const Login = () => {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const [loginErrors, setLoginErrors] = useState({});

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });

      const json = await data.json();
      console.log(json);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-end gap-6 p-20 bg-gray-500 w-1/2">
      {/* Login Form */}
      <form onSubmit={handleLoginSubmit} className="space-x-8 space-y-6">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginForm.username}
          onChange={handleLoginChange}
          className="p-1 px-5 rounded"
        />
        {loginErrors.username && (
          <span className="text-red-500">{loginErrors.username}</span>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={handleLoginChange}
          className="p-1 px-5 rounded"
        />
        {loginErrors.password && (
          <span className="text-red-500">{loginErrors.password}</span>
        )}
        <button type="submit" className="text-white text-xl">
          Login
        </button>
      </form>
    </div>
  );
};
