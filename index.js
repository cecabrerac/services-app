const express = require("express");
// const cluster = require("cluster");
const http = require("http");
// const socketIO = require("socket.io");
// const numCPUs = require("os").cpus().length;
// const { setupMaster, setupWorker } = require("@socket.io/sticky");
// const { createAdapter, setupPrimary } = require("@socket.io/cluster-adapter");

const cors = require("cors");
require("dotenv").config();

const appUsersRoutes = require("./routes/appUsers.routes");

// env variables
const { CLIENT_URL, CLIENT_URL2, CLIENT_LOCAL_URL } = process.env;

const app = express();
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Use routes
app.use(appUsersRoutes);

// html Bienvenida
app.engine("html", require("ejs").renderFile);

app.get("/welcome", function (req, res) {
  var name = "Winston Churchill";

  res.render(__dirname + "/templates/welcome.html", { name: name });
});

//Testing connection:
app.get("/", function (req, res, next) {
  res.send("Test success!!!");
});

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log("Error in server setup");
  } else {
    console.log(`Server listening on port ${process.env.PORT}!`);
  }
});
