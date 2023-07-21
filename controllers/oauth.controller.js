const { transporter } = require("../utils/mailer.js");

// Send email:

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Hola Carlos 👻" <apptrial.dev@gmail.com>', // sender address
    to: "carloscabrera.dev@gmail.com", // list of receivers separated by comma.
    subject: "Saludo desde mi programa ✔", // Subject line
    text: "Hola. Estoy probando el envío de correo electrónico desde mi backend", // plain text body
    html: "<p>Probando texto</<p>  <h1>APPTRIAL</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);
