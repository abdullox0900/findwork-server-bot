const formatMessage = (data) => {
    return `
  📝 *Vazifa nomi*: ${data.title}
  📄 *Tavsif*: ${data.body.slice(0, 30)}
  📍 *Shahar va Manzil*: ${data.regions[0].name}
  [🔗 *Vazifa uchun havola*](http://localhost:3000/ru/vacancies/${data.id})
  [📱 *Ilovaga havola*](https://unsplash.com/photos/black-and-white-smartphone-screen-NHhxAv5zVz4)
  [🌐 *Ijtimoiy tarmoqlar*](https://unsplash.com/photos/a-pile-of-red-hearts-with-white-hearts-on-them-FtuEzFq7Sq4)
    `;
  };
  
  module.exports = { formatMessage };