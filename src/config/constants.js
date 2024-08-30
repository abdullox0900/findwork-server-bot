require('dotenv').config();

module.exports = {
  TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
  CHANNEL_ID1: process.env.CHANNEL_ID1,
  CHANNEL_ID2: process.env.CHANNEL_ID2,
  CHANNEL_ID3: process.env.CHANNEL_ID3,
  PORT: process.env.PORT || 4000
};