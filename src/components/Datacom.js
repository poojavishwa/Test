import React from "react";
import { Link } from "react-router-dom";

export const Datacom = ({ item }) => {
  const cartData = async () => {
    const data = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const json = await data.json();
    console.log(json);
  };

  const removeData = async () => {
    const data = await fetch("http://localhost:3000/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item.id),
    });
    const json = await data.json();
  };
  console.log(item.id);
  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
        width="400px"
      />
      <h1>{item.title}</h1>
      <h1>{item.description}</h1>
      <h1>{item.price}</h1>
      <h1>{item.category}</h1>
      <Link to="/cart">
        <button
          onClick={() => {
            cartData();
          }}>
          Add to Cart
        </button>
      </Link>
    </div>
  );
};
