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
  }

}
