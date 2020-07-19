'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);
    let binary = n.toString(2);
    let count = 0;
    let countArr = [];
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            count++;
            countArr.push(count);
        } else if (binary[i] == 0) {
            count = 0;
        }
    } 
    console.log(Math.max(...countArr));
    //console.log(binary)
}
