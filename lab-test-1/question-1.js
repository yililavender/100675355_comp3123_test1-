const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (mixedArray) =>
  new Promise((res, rej) => {
    if (mixedArray.length == 0){
      rej("Array is invalid!")
    }        
    res(mixedArray.filter((element) => isNaN(element)).map((str) => str.toLowerCase()))
  })

lowerCaseWords(mixedArray)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error))
  


