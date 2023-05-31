require("dotenv").config();
const express = require("express");
const cors = require("cors");

// import config from "./config";

// import appUsersRoutes from "./routes/appUsers.routes";

const app = express();

// Settings

app.use(cors());
const port = process.env.PORT || 3001;
// app.set("port", config.port);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Escuchando en puerto ${port}`);
});

// app.use(appUsersRoutes);

// export default app;
