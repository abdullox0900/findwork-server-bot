const express = require('express');
const { CHECK_INTERVAL, CHANNEL_ID } = require('./config/constants');
const bot = require('./services/telegramBot');
const { fetchData } = require('./services/apiService');
const imageGeneration = require('./services/imageGeneration');
const { formatMessage } = require('./utils/messageFormatter');

const app = express();
let lastDataId = null;

const checkForUpdates = async () => {
  try {
    const data = await fetchData();
    const imageUrl = './public/resultImg.jpg';
    
    if (data && data.length > 0) {
      const firstData = data[0];
      imageGeneration(firstData.sub_category, firstData.salary_from_uzs, firstData.salary_to_uzs);
           
      if (firstData.id !== lastDataId) {
        const message = formatMessage(firstData);

        if (imageUrl) {
          console.log(CHANNEL_ID);
          
          await bot.sendPhoto(CHANNEL_ID, imageUrl, {
            caption: message,
            parse_mode: 'MarkdownV2'
          });
        } else {
          await bot.sendMessage(CHANNEL_ID, message, { parse_mode: "Markdown" });
        }
        
        lastDataId = firstData.id;
      }
    }
  } catch (error) {
    console.error("Xatolik yuz berdi: app.js", );
  }
};

setInterval(checkForUpdates, CHECK_INTERVAL);

module.exports = app;