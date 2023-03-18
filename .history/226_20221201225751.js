// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)



let count = 0
const countUp = () => {
    console.log(Math.random())
    count++;
}

const id = setInterval(() => {
   
    if (count > 5) {
        clearInterval(id)
    }
}, 2000);