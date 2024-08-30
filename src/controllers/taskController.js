const bot = require('../services/telegramBot');
const { CHANNEL_ID2 } = require('../config/constants');
const { formatMessage } = require('../utils/messageFormatter');
const imageGenerationTask = require('../services/imageGenerationTask');

const processApiData = async (data) => {
  try {
    const imageUrl = './public/resultImg.jpg';
    imageGenerationTask(data.sub_category, data.price_from, data.price_to);
    const message = formatMessage(data);

    if (imageUrl) {
      await bot.sendPhoto(CHANNEL_ID2, imageUrl, {
        caption: message,
        parse_mode: 'Markdown'
      });
    } else {
      await bot.sendMessage(CHANNEL_ID2, message, { parse_mode: "Markdown" });
    }
    return { success: true, message: 'Ma\'lumot muvaffaqiyatli yuborildi' };
  } catch (error) {
    console.error('Xatolik yuz berdi:', error);
    return { success: false, message: 'Ma\'lumotni yuborishda xatolik yuz berdi' };
  }
};

module.exports = { processApiData };