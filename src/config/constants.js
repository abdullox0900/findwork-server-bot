require('dotenv').config();

module.exports = {
  TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
  CHANNEL_ID: process.env.CHANNEL_ID,
  API_URL: process.env.API_URL,
  CHECK_INTERVAL: 2000,
  PORT: process.env.PORT || 4000
};