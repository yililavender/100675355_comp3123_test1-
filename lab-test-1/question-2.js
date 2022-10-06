
let resolvedPromise = new Promise(function(resolve, reject){
    setTimeout(resolve({ 'Message': "Delayed Success!" }), 500)
  })

let rejectedPromise = new Promise(function(resolve, reject){
    setTimeout(reject({ 'Error': "Delayed Exception!" }), 500)
  })

resolvedPromise.then(function(result) {
  console.log(result)
})

rejectedPromise.catch(function(error) {
  console.log(error)
})

