var cron = require("node-cron");

cron.schedule("*/5 * * * * *", async () => {
  await console.log("running a task every 5 seconds");
});
