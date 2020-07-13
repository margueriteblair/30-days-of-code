function processData(str) {
    let evens = [];
    let odds = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evens.push(str[i])
        } else if (i % 2 === 1) {
            odds.push(str[i])
        }
    }
    evens = evens.join("");
    odds = odds.join("");
    console.log(evens, odds);
} 

processData('Hello World');