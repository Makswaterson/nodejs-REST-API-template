const gridMail = require('@sendgrid/mail');

require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

gridMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const email = { ...data, from: 'maks.lukyan@gmail.com' };
  await gridMail.send(email);
  return true;
};

module.exports = sendEmail;
