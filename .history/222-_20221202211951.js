const texts = ['rofl', 'lol', 'omg']
const text = 'ncdsjcsdcsd'

let arraySplit = text.toLocaleUpperCase().split('');

console.log(arraySplit)

const movies = [{

        title: 'Amadeus',
        score: 99,
        years: 1984

    },

    {
        title: 'Sharknado',
        score: 35,
        years: 2013
    },

    {
        title: '13 Going On 30',
        score: 70,
        years: 2004
    },

    {
        title: 'Stand By Me',
        score: 84,
        years: 1986
    },

    {

        title: 'Waterworld',
        score: 62,
        years: 1995

    },

    {
        title: 'Jingle All The Way',
        score: 71,
        years: 1996
    },

    {
        title: 'Parasite',
        score: 95,
        years: 2019

    },

    {
        title: 'Notting HIll',
        score: 77,
        years: 1999

    },

    {
        title: 'Alien',
        score: 90,
        years: 1979
    }

]

const titles = movies.map(function (movie) {
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
const countUp = () => {
    count++;
    console.log(Math.random());
}
const intervalId = setInterval(() => {
    countUp();
    if (count > 5) {
        clearInterval(intervalId); //intervalIdをclearIntervalで指定している
    }
}, 1000);

// setInterval(id, 2000)



// 227  filter

const goodMovies = movies.filter(m => m.score > 80);
const goodTitles = goodMovies.map(m => m.title);

const badTitles = movies.filter(m => m.score <= 80).map(m => m.title)





// function validUserNames(usernames) {
//     // your code here
//     if (isNaN(usernames)) {

//         console.log(usernames.filter(n => n.length < 10));
//     }
//     console.log('Enter a name');
//   }


function validUserNames(usernames) {
    // your code here
    if (isNaN(usernames)) {

        return usernames.filter(n => n.length < 10);
    }
    return 'Enter a name';
}


// 228 some & every 

movies.some(movie => movie.years > 2015);

// 50
// 🤬これはいきなりallEvensが来てるから❌
// allEvens = (numbers) => {
//     numbers.every(number => number % 2 === 0)
// }

// 正解
const allEvens = numbers =>
    numbers.every(number => number % 2 === 0)


// 229

// reduceと同じtraditionalな方法　just a different format
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total);

// reduceを使うと
const total = prices.reduce((total, price) => {
    return total + price
})
console.log(total)

// 上のイコールこれ
const totalTimes = prices.reduce((total, price) => total * price)
console.log(totalTimes)

// 229







