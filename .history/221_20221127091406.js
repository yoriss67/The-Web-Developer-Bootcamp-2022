const numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(e => console.log(e));

// 上と同じ
for( let el of numbers) {
    console.log(el);
}

const movies = [{
    title: 'Amadeus', 
    score: 99
},
{
    title: 'Stand By me',
    score: 85
},
{
    title: 'Parasite'
}



]