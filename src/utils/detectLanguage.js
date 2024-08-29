function detectLanguage(langText) {
    
const russianLetters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const uzbekLetters = 'аbdefghijklmnopqrstuvxyzоʻғҳқ';

    let uzbekCount = 0;
    let russianCount = 0;

    
    for (let char of langText.toLowerCase()) {
        if (uzbekLetters.includes(char)) {
            uzbekCount++;
        } else if (russianLetters.includes(char)) {
            russianCount++;
        }
    }

    if (uzbekCount > russianCount) {
        return "Uz";
    } else if (russianCount > uzbekCount) {
        return "Ru";
    } else {
        return "Not found";
    }
}

module.exports = {detectLanguage}