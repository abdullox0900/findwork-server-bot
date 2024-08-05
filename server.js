const express = require("express")
const axios = require("axios")
const TelegramBot = require("node-telegram-bot-api")
const imageGeneration = require('./src/imageGeneration')

const app = express();

const TELEGRAM_TOKEN = "7072270855:AAGSH1hb1vKk0wzQXQeCcO-J_04TRF4RWKk"; 
const CHANNEL_ID = "@KornetZadaniya"; 
const API_URL = "http://192.168.0.10:8081/api/v1/vacancies";

const CHECK_INTERVAL = 2000;

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

let lastDataId = null;

const formatMessage = (data) => {
  return `

📝 *Vazifa nomi*: ${data.title}

📄 *Tavsif*: ${body.slice(0, 30)}

📍 *Shahar va Manzil*: ${data.regions[0].name}

[🔗 *Vazifa uchun havola*](http://localhost:3000/ru/vacancies/${data.id})

[📱 *Ilovaga havola*](https://unsplash.com/photos/black-and-white-smartphone-screen-NHhxAv5zVz4)

[🌐 *Ijtimoiy tarmoqlar*](https://unsplash.com/photos/a-pile-of-red-hearts-with-white-hearts-on-them-FtuEzFq7Sq4)
  `;
};



const checkForUpdates = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data.data;

    const imageUrl = './public/resultImg.jpg';

    if (data && data.length > 0) {
      const firstData = data[0]; 

      imageGeneration(firstData.sub_category)

      if (firstData.id !== lastDataId) {
        const message = formatMessage(firstData);
        if (imageUrl) {
          await bot.sendPhoto(CHANNEL_ID, imageUrl, {
            caption: message,
            parse_mode: 'Markdown'
          })
        } else {
          await bot.sendMessage(CHANNEL_ID, message, { parse_mode: "Markdown" });
        }
        lastDataId = firstData.id;
      }
    }
  } catch (error) {
    console.error("Xatolik yuz berdi:");
  }
};

setInterval(checkForUpdates, CHECK_INTERVAL);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portida ishlayapti`);
});
