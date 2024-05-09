import React, { useState } from "react";

export const Signup = () => {
  const [signupErrors, setSignupErrors] = useState({});
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupForm),
      });
      const json = await data.json();
      console.log(json);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  return (
    <div className="p-20 bg-gray-500 flex flex-col w-1/2 ">
      <form onSubmit={handleSignupSubmit} className="flex flex-col space-y-6 ">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={signupForm.username}
          onChange={handleSignupChange}
          className="p-1 px-5 rounded"
        />
        {signupErrors.username && (
          <span className="text-red-500">{signupErrors.username}</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupForm.email}
          onChange={handleSignupChange}
          className="p-1 px-5 rounded"
        />
        {signupErrors.email && (
          <span className="text-red-500">{signupErrors.email}</span>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupForm.password}
          onChange={handleSignupChange}
          className="p-1 px-5 rounded"
        />
        {signupErrors.password && (
          <span className="text-red-500">{signupErrors.password}</span>
        )}
        <button type="submit" className="text-white text-xl">
          SignUp
        </button>
      </form>
    </div>
  );
};
