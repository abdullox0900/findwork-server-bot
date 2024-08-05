const { createCanvas, loadImage, registerFont } = require('canvas')
const fs = require('fs')

const imagePath = './public/firstImg.jpg'
registerFont('./public/fonts/Inter_28pt-Bold.ttf', { family: 'Inter' });

function imageGeneration(text) {
    loadImage(imagePath).then((image) => {
        const canvas = createCanvas(image.width, image.height)
        const ctx = canvas.getContext('2d');
        
        ctx.drawImage(image, 0, 0)
    
        ctx.fillStyle = 'white'
        ctx.font = 'bold 180px Inter'
    
        ctx.fillText(`${text}`, 100, 800)
    
        const buffer = canvas.toBuffer('image/jpeg')
    
        fs.writeFileSync('./public/resultImg.jpg', buffer)
    });
}

module.exports = imageGeneration
