const texts = ['rofl', 'lol', 'omg']
const text = 'ncdsjcsdcsd'

let arraySplit = text.toLocaleUpperCase().split('');

console.log(arraySplit)

const movies = [
    {
    title: 'Amadeus', 
    score: 99
},
{
    title: 'Stand By me',
    score: 85
},
{
    title: 'Parasite', 
    score: 95
}
]

const titles = movies.map(function(movie) {
    return movie.title.toUpperCase();
})


// 226

console.log('HELLO')
setTimeout(() => {
    console.log('...Are you still there?')
}, 3000)




// let counts = 0;

// const id = () => {
//      counts = console.log(Math.random())
//     if (counts > 3) {
//         clearInterval(id);
//     }
// }

let count = 0;
const countUp = () =>{
 count++;
  console.log(Math.random());
}
const intervalId = setInterval(() =>{
  countUp();
  if(count > 5){　
    clearInterval(intervalId);　//intervalIdをclearIntervalで指定している
  }}, 1000);

// setInterval(id, 2000)



