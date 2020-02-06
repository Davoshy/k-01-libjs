module.exports = {
  // #010202
  toSquare: arrayNum => {
    if (typeof arrayNum == "object") {
      return arrayNum.map(number => number * number);
    }
    if (typeof arrayNum == "number") {
      return arrayNum * arrayNum;
    } else {
      return NaN;
    }
  },

  // #010203
  toPower: (base, power) => {
    return typeof base == "number" && typeof power == "number"
      ? Math.pow(base, power)
      : NaN;
  },
  // #010204
  // #010205
  getRandom: (num1, num2) => {
    if (num1 && num2) {
      if (typeof num1 == "number" && typeof num2 == "number") {
        let number = Math.random() * (num2 - num1) + num1;
        return number;
      }
    } else if (!num1 && !num2) {
      return Math.random() * 10;
    }
  },

  // #010206
  getSum: array => {
    return array
      .filter(element => typeof element == "number")
      .reduce((a, b) => a + b);
  },

  // #010301
  getNumbers: array => {
    return array.filter(element => typeof element == "number");
  },

  // #010302
  // #010303
  getGreaterThan: (array, base) => {
    let newArray = [];
    array.forEach(element => {
      if (typeof element == "number") {
        if (element > base) {
          newArray.push(element);
        }
      } else if (typeof element == "string") {
        if (element.length > base) {
          newArray.push(element);
        }
      }
    });
    return newArray;
  },

  // #010304
  getEven: array => array.filter(element => element % 2 == 0),

  // #010401
  getKeys: obj => Object.keys(obj),

  // #010402
  getValues: obj => Object.values(obj),

  // #010403
  getNames: array => array.map(object => object.name),

  // #010404
  selectProperty: (array, string) => {
    return array.map(object => {
      return { [string]: object[string] };
    });
  },

  // #010405
  deleteProperty: (array, string) => {
    return array.map(object => {
      delete object[string];
      return object;
    });
  },

  // #010406
  merge: (array1, array2) => {
    return array1.map((object, index) => {
      return { name: object.name, age: array2[index].age };
    });
  },

  // #010407
  flipWords: string => {
    let newString = string.split(" ");
    let reverseArray = newString.reverse();
    let finalString = reverseArray.join(" ");
    return finalString;
  },

  // #010408
  search: (array, word) => {
    let newArray = [];
    array.forEach(string => {
      if (string.includes(word)) {
        newArray.push(string);
      }
    });
    return newArray;
  }
};
