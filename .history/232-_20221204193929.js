// 232 default parameter

function rollDie(numSides = 6) {

    return Math.floor(Math.random() * numSides) + 1;
}


// 233

const nums = [1,3,5,6,8,9,2,4,5,30];

console.log(Math.max(nums));



// https://stackoverflow.com/questions/70944210/why-is-the-spread-operator-needed-for-math-max
function findLongestWordLength(str) {
    let arr = str.split(' '); 
    let lengths = arr.map(word => word.length);
    
    console.log(Math.max(...lengths));
    }
    
    findLongestWordLength("The quick brown fox jumpedeee over the lazy dog");

    console.log(...'Hello');

    const cats = ['Blue', 'Httr', 'Yelloe'];
    const dogs = ['axasc', 'cscs' , 'cdscsd'];

    // これだと一つの値になる
    // const allPets = [cats + dogs]

    const allPets = [...cats, ...dogs];

    console.log(allPets);


    // 👩‍🎓array in a object => The indices are used as the key.
    console.log({...[2,4,6,7]});

    // 235

    const dataFromForm = {
        email: '1010101@gmail.com',
        password: ''
    }