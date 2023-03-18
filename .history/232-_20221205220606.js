// 232 default parameter

function rollDie(numSides = 6) {

    return Math.floor(Math.random() * numSides) + 1;
}


// 233

const nums = [1, 3, 5, 6, 8, 9, 2, 4, 5, 30];

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
const dogs = ['axasc', 'cscs', 'cdscsd'];

// これだと一つの値になる
// const allPets = [cats + dogs]

const allPets = [...cats, ...dogs];

console.log(allPets);



// 235

const dataFromForm = {
    email: '1010101@gmail.com',
    password: '67',
    username: 'nano'
}

// 🤬 { }忘れずに！！！！１
console.log({
    ...dataFromForm
});


const newUser = {
    ...dataFromForm,
    id: 111,
    isAdmin: false
}


// 👩‍🎓array in a object => The indices are used as the key.
console.log({
    ...[2, 4, 6, 7]
});

function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        // 🤬🤬for の中でreturnしても意味ない！！！
        // return total += arguments[i];
        total += arguments[i];
    }
    return total;
}

function sum() {
    // 🤬🤬return忘れた
    return arguments.reduce((total, el) => total + el);
}



// -------------------------------------
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw')
        }
    };
}

const circle = createCircle(2);

function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = Circle(9);




// 「The 'new' operator in Javascript」

function Shape(x, y) {
    // 「this」＝empty object
    this.x = x;
    this.y = y;
}

// newを使わないでsimulate
function newSimulated(...args) {
let obj = {};
Shape.call(obj, ...args);
return obj;
}


let sh = new newSimulated(5, 10);
console.log(sh);

let shS = new Shape(3,8);
console.log(shS)
// --------------------------