const AMTHAL = require("./data/index.json");

const randomMathal = () => {
    return AMTHAL[Math.floor(Math.random() * AMTHAL.length)]; // النتيجة تكون رقم عشوائي كل مرة على حسب عدد عناصر المصفوفة وبالتالي اختيار احد عناصرها ليظهر في المتصفح
}

const randomTen = () => {
    let randomList = new Set();

    while(randomList.size < 10) {
        let random = Math.floor(Math.random() * AMTHAL.length);
        if(!randomList.has(random)) {
            randomList.add(random);
        }
    }

    return [...randomList].map(index => {
        return AMTHAL[index];
    })
}

module.exports = {randomMathal, randomTen};