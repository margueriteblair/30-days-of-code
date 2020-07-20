function addTogether() {
    let checkNumbers = function(num) {
      if (typeof(num) !== "number") {
        return undefined;
      } else return num;
    };
  
    if (arguments.length > 1) {
      let a = checkNumbers(arguments[0]);
      let b = checkNumbers(arguments[1]);
      if (a === undefined || b === undefined) {
        return undefined;
      } else {
        console.log(a + b);
      }
    } else {
      let c = arguments[0];
      if (checkNumbers(c)) {
        return function(arg2) {
          if (c === undefined || checkNumbers(arg2) === undefined) {
            return undefined;
          } else {
            console.log(c + arg2) ;
          }
        };
      }
    }
  }
  
  addTogether(2, 3);