function formatPriceUZS(price) {
    const roundedPrice = roundPrice(price);
    return new Intl.NumberFormat('uz-UZ', { 
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(roundedPrice);
}

function roundPrice(x_price) {
    const millionsPart = Math.floor(x_price / 1000000);
    
    switch (true) {
      case (millionsPart <= 2):
        return Math.ceil(x_price / 1000000) * 1000000;
      case (millionsPart <= 5):
        return Math.ceil(x_price / 500000) * 500000;
      default:
        return Math.ceil(x_price / 1000000) * 1000000;
    }
  }

module.exports = {formatPriceUZS}