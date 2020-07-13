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

function processData2(input) {
    let S = input.split(/\n/).slice(1)
    for (let i = 0; i < S.length; i++) {
        let evens = [];
        let odds = [];
        for (let j = 0; j < S[i].length; j++) {
        if (j % 2 === 0) {
            evens.push(S[i][j])
        } else if (j % 2 === 1) {
            odds.push(S[i][j])
        }
        }
    evens = evens.join("");
    odds = odds.join("");
    console.log(evens, odds);
    }
} 