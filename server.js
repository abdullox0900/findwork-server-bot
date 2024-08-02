import express from "express";
import axios from "axios";
import TelegramBot from "node-telegram-bot-api";

const app = express();

const TELEGRAM_TOKEN = "7072270855:AAGSH1hb1vKk0wzQXQeCcO-J_04TRF4RWKk"; // Bot tokeni
const CHANNEL_ID = "@oneone900"; // Kanal IDsi '@channelusername' yoki '-1001234567890' shaklida
const API_URL = "http://192.168.0.10:8081/api/v1/vacancies"; // API dan ma'lumot oladigan URL

const CHECK_INTERVAL = 30000; // 30 soniya (millisekundlarda)

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

let lastDataId = null; // Oxirgi yuborilgan ma'lumotning IDsi

// Ma'lumotlarni formatlash funktsiyasi
const formatMessage = (data) => {
  return `
    *Yangi Ma'lumotlar*
    ID: ${data.id}
    Nomi: ${data.name}
    Ta'rif: ${data.description}
  `;
};

// API-dan birinchi ma'lumotni olish va yuborish
const checkForUpdates = async () => {
  try {
    // API-dan ma'lumotlarni olish
    const response = await axios.get(API_URL);
    const data = response.data;

    // Birinchi ma'lumotni tekshirish
    if (data && data.length > 0) {
      const firstData = data[0]; // Eng birinchi ma'lumot

      // Agar yangi ma'lumot bo'lsa, kanalga yuborish
      if (firstData.id !== lastDataId) {
        const message = formatMessage(firstData);
        await bot.sendMessage(CHANNEL_ID, message, { parse_mode: "Markdown" });

        // Oxirgi yuborilgan ma'lumotning ID sini yangilash
        lastDataId = firstData.id;
      }
    }
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
  }
};

// Har 30 soniyada yangilanishlarni tekshirish
setInterval(checkForUpdates, CHECK_INTERVAL);

// Express serverni ishga tushirish (ixtiyoriy)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portida ishlayapti`);
});