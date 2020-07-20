function addTogether() {
    let checkNum = function(num) {
      if (typeof(num) !== "number") {
        return undefined;
      } else return num;
    };
  
    if (arguments.length > 1) {
      let a = checkNum(arguments[0]);
      let b = checkNum(arguments[1]);
      if (a === undefined || b === undefined) {
        return undefined;
      } else {
        console.log(a + b);
      }
    } else {
      let c = arguments[0];
      if (checkNum(c)) {
        return function(arg2) {
          if (c === undefined || checkNum(arg2) === undefined) {
            return undefined;
          } else {
            console.log(c + arg2) ;
          }
        };
      }
    }
  }
  
  addTogether(2, 3);