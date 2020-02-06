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
  // #010303
  getGreaterThan : (array, base) => {
    if(typeof array[0]== 'number'){
      const newArray = array.filter(number => number > base)
      return newArray
    }
    else if(typeof array[0] == 'string'){
      const newArray = array.filter(string => string.length > base)
      return newArray
    }
  },

  // #010304
  getEven : (array) => {
    let newArray = []
    array.forEach(number => {
      if(number % 2 == 0){
        newArray.push(number)
      }
    })
    return newArray
  },

  // #010401
  getKeys : (obj) => {
    return Object.keys(obj)
  },

  // #010402
  getValues : (obj) => {
    return Object.values(obj)
  },

  // #010403
  getNames : (array) => {
    let nameArray = []
    array.forEach(object => {
      nameArray.push(object.name)
    })
    return nameArray
  },

  // #010404
  selectProperty : (array, string) => {
    let newArray = []
    array.forEach(object => {
      newArray.push({[string]:object[string]})
    })
    return newArray
  },

  // #010405
  deleteProperty : (array, string) => {
    let newArray =[]
    array.forEach(object => {
      delete object[string]
      newArray.push(object)
    })
    return newArray
  },

  // #010406
  merge : (array1, array2) => {
    let newArray = []
    array1.forEach((element, index) => {
      newArray.push({'name':array1[index].name, 'age':array2[index].age})
    })
    return newArray
  }

}
