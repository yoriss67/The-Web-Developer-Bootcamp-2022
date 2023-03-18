// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)






const id = function() {
    console.log(Math.random())
}

setInterval(id(), 2000)