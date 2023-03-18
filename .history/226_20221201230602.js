// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)




const id =() => {
   countUp();
    if (count > 5) {
        clearInterval(id)
    }
}, 1000);


const id = () => {
    console.log(Math.random() +1)

}