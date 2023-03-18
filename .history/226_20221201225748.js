// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)



const id = setInterval(() => {
   
    if (count > 5) {
        clearInterval(id)
    }
}, 2000);