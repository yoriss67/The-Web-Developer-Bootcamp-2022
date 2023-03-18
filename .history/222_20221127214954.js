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

movies.map(function(movie) {
    return movie.title;
})
