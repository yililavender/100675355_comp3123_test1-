let mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
  
let lowerCaseWords = new Promise(function(resolve, reject){
  if(mixedArray.length != 0){
    resolve(mixedArray.filter((element) => isNaN(element)).map((str) => str.toLowerCase()))
  }
  else{
    reject(Error("It broke"))
  }
  })

lowerCaseWords.then(function(result) {
  console.log(result)
}, function(error){
  console.log(error)
})
  