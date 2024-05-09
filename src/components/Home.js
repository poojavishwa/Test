import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <Link to="/login">
          <li>Login </li>
        </Link>
        <Link to="/signup">
          <li>Signup </li>
        </Link>

        <Link to="/dashboard">
          <li>Deshboard </li>
        </Link>
        <Link to="/cart">
          {" "}
          <li>Cart </li>
        </Link>
      </ul>
    </div>
  );
};
