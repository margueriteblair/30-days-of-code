function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine(), 10);
    if ((N%2===1) || (N%2===0 && N<=20 && N>=6)) {
        console.log('Weird')
    } else if ((N>20 && N%2===0) || (N>2 && N<5 && N%2===0)) {
        console.log('Not Weird')
    }
}