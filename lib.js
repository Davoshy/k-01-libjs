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

}
