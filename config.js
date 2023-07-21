const { config } = require("dotenv");

config();

module.exports = {
  port: process.env.PORT || 3100,
  dbUser: process.env.DATABASE_USER || "",
  dbPassword: process.env.DATABASE_PASSWORD || "",
  dbServer: process.env.DATABASE_SERVER || "",
  dbName: process.env.DATABASE_NAME || "",
  clientURL: process.env.CLIENT_URL,
  clientURL2: process.env.CLIENT_URL2,
  clientLocalURL: process.env.CLIENT_LOCAL_URL || "http://localhost:4200",
  mailerUser: process.env.MAILER_USER || "",
  mailerPass: process.env.MAILER_PASS || "",
};
