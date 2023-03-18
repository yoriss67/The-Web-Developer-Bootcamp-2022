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

// 236

function sum() {
    return arguments.reduce((total, el) => total += el);
}

// 237
const user = {
    email: 'harvey@gmail.com',
    password:
    'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly',
    city: 'San Francisco',
    state: 'California'
    }
    // これはいちいち書かないといけない
    // const firstName = user.firstName;
    // const lastName = user.lastName;

    // userは一緒じゃないとだめ
    // const {bio, city} = user;


// 言い方変えたかったら
// const {born: birthYear} = user;

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 19387,
    city: 'Tulsa',
    state: 'Oklahoma',
    died: 1200
    }

    // 📄この'N/A'は表示されないbecause there is a value found for died in that object
    const {born :birthYear, died: deathYear= 'N/A' } = user;

    // const {city, state, died = 'N/A'} =user2


    // 思いつき 変数に入れたやつを配列にどんどん追加
    
    function tryout(elements) {
        
       
        elements.forEach(function {
            console.log(element);
        }
        );
    }
    

    