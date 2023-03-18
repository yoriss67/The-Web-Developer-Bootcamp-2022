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
const goodTitles = 

