// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)






let id = () => {
    console.log(Math.random());
    if (id > 3) {
        clearInterval(id);
    }
}


// setInterval(id, 2000)

