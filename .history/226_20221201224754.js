// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)



const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

setTimeout(clearInterval(id),5000)