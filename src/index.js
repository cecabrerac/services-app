import app from "./app";

app.listen(app.get("port"));

console.log("Server on port", app.get("port"));

// const express = require("express");
// const http = require("http");
// require("dotenv").config();
// const cors = require("cors");

// // Create Express app
// const app = express();

// app.use(
//   cors({
//     origins: ["http://localhost:4200", "http://localhost:3000", "*"],
//     methods: ["GET", "POST"],
//     allowedHeaders: ["my-custom-header"],
//     // credentials: true,
//   }),
// );

// // Test server from browser
// app.get("/test", function (req, res, next) {
//   // Handle the get for this route
//   res.send("Test success!!!");
// });

// // Create HTTP server
// const server = http.createServer(app);

// // Start server
// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
