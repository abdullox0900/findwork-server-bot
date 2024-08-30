const fs = require('fs')
const { createCanvas, loadImage, registerFont } = require('canvas')
const { formatPriceUZS } = require('../utils/formatPriceUZS');
const { detectLanguage } = require('../utils/detectLanguage');

const imagePath = './public/firstImg.jpg'
const fontPath = './public/fonts/Inter_28pt-Bold.ttf'

registerFont(fontPath, { family: 'Inter' });


function imageGenerationTask(categoryTitle, price_from = 0, price_to = 0) {
    
    loadImage(imagePath).then((image) => {
        const canvas = createCanvas(image.width, image.height)
        const ctx = canvas.getContext('2d');

        
        ctx.drawImage(image, 0, 0)

        ctx.fillStyle = '#909ECA' 
        ctx.font = `regular 90px Arial` 
        ctx.fillText(`Topshiriq / ${detectLanguage(categoryTitle)}`, 100, 500) 
    
        ctx.fillStyle = 'white'
        ctx.font = 'bold 180px Inter'
    
        ctx.fillText(`${categoryTitle}`, 100, 800)

        ctx.fillStyle = '#909ECA' 
        ctx.font = 'regular 70px Arial' 
        ctx.fillText(`${'Ish haqi'}`, 100, 1050) 

        ctx.fillStyle = '#909ECA'
        ctx.font = 'medium 120px Arial' 
        ctx.fillText(`${price_from && price_to == null ? 'Kelishgan holda' : `${formatPriceUZS(price_from)}dan ${formatPriceUZS(price_to)}gacha som`}`, 100, 1250) 
    
        const buffer = canvas.toBuffer('image/jpeg')
    
        fs.writeFileSync('./public/resultImg.jpg', buffer)
    });
}

module.exports = imageGenerationTask