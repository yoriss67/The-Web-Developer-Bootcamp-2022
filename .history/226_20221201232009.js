// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)






const id = () => {
    let counts = console.log(Math.random())
    if (counts > 3) {
        clearInterval(id);
    }
}


// setInterval(id, 2000)

