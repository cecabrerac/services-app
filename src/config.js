import { config } from "dotenv";

config();

export default {
  port: process.env.PORT || 3500,
  dbUser: process.env.DATABASE_USER || "",
  dbPassword: process.env.DATABASE_PASSWORD || "",
  dbServer: process.env.DATABASE_SERVER || "",
  dbName: process.env.DATABASE_NAME || "",
};
