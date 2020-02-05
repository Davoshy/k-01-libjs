module.exports = {
  // #010201
  toSquare : (arrayNum) => {
    let newArray = []
      arrayNum.forEach(element => {
        if(typeof element == 'number'){
          newArray.push(element * element)
        }
      })
      return newArray
  }
}
