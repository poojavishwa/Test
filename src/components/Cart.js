import React, { useEffect, useState } from "react";

export const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/cart");
    const json = await data.json();
    setCart(json);
    // console.log(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
            width="400px"
          />
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <h1>{item.price}</h1>
          <h1>{item.category}</h1>
          <button>Remove Item</button>
        </div>
      ))}
    </div>
  );
};
