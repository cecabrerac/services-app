import express from "express";
import config from "./config";

import appUsersRoutes from "./routes/appUsers.routes";

const app = express();

// Settings

app.set("port", config.port);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(appUsersRoutes);

export default app;
