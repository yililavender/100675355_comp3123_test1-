const resolvedPromise = () =>
  new Promise((res, rej) => {
    setTimeout(res({ 'Message': "Delayed Success!" }), 500)
  })

const rejectedPromise = () =>
  new Promise((res, rej) => {
    setTimeout(rej({ 'Error': "Delayed Exception!" }), 500)
  })

resolvedPromise().then((message) => console.log(message))
rejectedPromise().catch((message) => console.error(message))
