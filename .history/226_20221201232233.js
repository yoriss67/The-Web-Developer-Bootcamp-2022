// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)




let counts = 0;

const id = () => {
     counts = console.log(Math.random())
    if (counts > 3) {
        clearInterval(id);
    }
}

let count = 0;
const countUp = () =>{
  console.log(count++);
}
const intervalId = setInterval(() =>{
  countUp();
  if(count > 5){　
    clearInterval(intervalId);　//intervalIdをclearIntervalで指定している
  }}, 1000);

// setInterval(id, 2000)

