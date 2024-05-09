// const express = require("express");
// const axios = require("axios");

// const app = express();
// const cors = require("cors");
// const port = 3000; // Choose any port you like

// // Middleware to parse JSON bodies
// app.use(cors());
// app.use(express.json());
// app.use(function (res) {
//   res.header("Access-Control-Allow-Headers", "*");
// });

// // Define a route to proxy requests to the API
// app.post("/login", async (req, res) => {
//   try {
//     const response = await axios.post(
//       "http://shutterscripter.com/pollenminds_apis/login.php",
//       req.body // Pass the request body directly to the API
//     );
//     res.json(response.data); // Return the API response to the client
//   } catch (error) {
//     console.error("Proxy error:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while proxying the request." });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Proxy server is listening at http://localhost:${port}`);
// });

// // const handleLogin = async (e) => {
// //   console.log(username);
// //   console.log(password);
// //   e.preventDefault();
// //   try {
// //     const response = await fetch(
// //       `https://shutterscripter.com/pollenminds_apis/login.php?email=` +
// //         username +
// //         `&password=` +
// //         password +
// //         `&api_key=OSS2ZERO1TWO`
// //     );
// //     const responseData = await response.json();
// //     console.log(responseData);
// //     if (responseData.success === 1) {
// //       setLoggedIn(handleClick);
// //     } else {
// //       setError(responseData.message);
// //     }
// //   } catch (error) {
// //     console.error("Login error:", error);
// //     setError("An error occurred during login.");
// //   }
// // };
