// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)



const id = setInterval(() => {
    let count = 0
    console.log(Math.random())
    if(count > 5) {
        clearInterval(id)
    }
}, 2000);

