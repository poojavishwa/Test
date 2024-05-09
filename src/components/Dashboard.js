import React, { useEffect, useState } from "react";
import { Datacom } from "./Datacom";

export const Dashboard = () => {
  const [apiData, setApiData] = useState([]);

  //   console.log(apiData);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/products");
    const json = await data.json();
    setApiData(json);
    // console.log(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>username </li>
        <li>Deshboard </li>
        <li>Cart </li>
      </ul>
      <div>
        {apiData.map((item) => (
          <Datacom item={item} />
        ))}
      </div>
    </div>
  );
};
