// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)



let count = 0
const countUp = () => {
    count = console.log(Math.random())
    // console.log(count++);
}

const id = setInterval(() => {
   countUp();
    if (count > 5) {
        clearInterval(id)
    }
}, 1000);