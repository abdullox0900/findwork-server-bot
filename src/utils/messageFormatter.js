const { JSDOM } = require('jsdom');

function htmlToText(html) {
    const dom = new JSDOM(html);
    return dom.window.document.body.textContent || "";
}

function cleanText(text) {
  return text.replace(/[^a-zA-Zа-яА-Я0-9\s]/g, ' ')
             .replace(/\s+/g, ' ')
             .trim();
}

const formatMessage = (data) => {

   const bodyText = cleanText(htmlToText(data.body))
   
    return `
📝 *Vazifa nomi*: ${data?.title}

📄 *Tavsif*: ${bodyText?.slice(0, 200)}

📍 *Shahar va Manzil*: ${data.regions[0].name.replace(/`/g, "'")}

[🔗 *Vazifa uchun havola*](http://localhost:3000/ru/vacancies/)

[📱 *Ilovaga havola*](https://unsplash.com/photos/black-and-white-smartphone-screen-NHhxAv5zVz4)

[🌐 *Ijtimoiy tarmoqlar*](https://unsplash.com/photos/a-pile-of-red-hearts-with-white-hearts-on-them-FtuEzFq7Sq4)
    `;
  };
  
module.exports = { formatMessage };