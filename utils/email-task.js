// tarea para enviar correo a una hora determinada

const emailTask = () => {
  const { enviarCorreo } = require("../controllers/enviarCorreo.controller");
  console.log("Ejecutando emailtask function...");
  var cron = require("node-cron");

  cron.schedule(
    "10 14 * * *",
    async () => {
      await enviarCorreo();
    },
    {
      scheduled: true,
      timezone: "America/Bogota",
    },
  );
};

module.exports = {
  emailTask,
};
