// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)



let count = 0
const countUp = () => {
    count = console.log(Math.random() +1)
    // console.log(count++);
}

const id =() => {
   countUp();
    if (count > 5) {
        clearInterval(id)
    }
}, 1000);