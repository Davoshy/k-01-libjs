module.exports = {
  // #010202
  toSquare : (arrayNum) => {
    if(typeof arrayNum == 'object'){
    let newArray = []
      arrayNum.forEach(element => {
        if(typeof element == 'number'){
          newArray.push(element * element)
        }
      })
      return newArray
    }
    if(typeof arrayNum == 'number'){
      return arrayNum * arrayNum
    }
    else {
      return NaN
    }
  },
  // #010203
  toPower : (base, power) => {
    if(typeof base == 'number' && typeof power == 'number' ){
      return Math.pow(base, power)
    }
    else {
      return NaN
    }
  },
  // #010204
  // #010205
  getRandom : (num1, num2) => {
    if(num1 && num2){
      if(typeof num1 == 'number' && typeof num2 == 'number'){
        let number = Math.random()*(num2 - num1)+ num1
        return number
      }
    }
    else if(!num1 && !num2){
      return Math.random()*10
    }
  },

  // #010206
  getSum : (array) => {
    let newArray = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    array.forEach(element => {
      if(typeof element == 'number'){
        newArray.push(element)
      }
    })
    return newArray.reduce(reducer)

  },

  // #010301
  getNumbers : (array) => {
    let numArray = []
    array.forEach(element => {
      if(typeof element == 'number'){
        numArray.push(element)
      }
    })
    return numArray
  },

  // #010302
  getGreaterThan : (array, base) => {
    const newArray = array.filter(number => number > base)
    return newArray
  }

}
