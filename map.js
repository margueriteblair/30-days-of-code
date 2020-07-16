function processData(input) {
    const arr = input.split(/\n/); 
    const map = new Map(); 
    const n = +arr[0];
   for(let i = 1; i < arr.length; i++) {
       const [key, value] = arr[i].split(' ');
       if(value !== undefined) {
           map.set(key, +value);
       } else {
           const searchedString = arr[i];
           console.log(validator(searchedString, map));
       }
   }
   }
   function validator(key, map) { 
       if(map.has(key)) {
       const value = map.get(key); 
           return key+'='+value
        } return 'Not found'; 
        };
   
   process.stdin.on("end", function () { processData(_input); });
   
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   _input = "";
   process.stdin.on("data", function (input) {
       _input += input;
   });
   
   process.stdin.on("end", function () {
      processData(_input);
   });
   