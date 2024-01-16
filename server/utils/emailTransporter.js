import NodeMailer from "nodemailer";
export const transporter = NodeMailer.createTransport({
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
});

export const emailConfig = (userEmail, subject, message) => {
  const emailOptions = {
    from: process.env.MAILER_USER,
    to: userEmail,
    subject,
    text: message,
  };
  return emailOptions;
};
