function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= num && num <= max;
    }
}

const testRange = function(num) {
    return num >= 100 && num <= 200;
}

// promptで何番？て聞いて番号によって見せる画像を変える

let numberOrder = parseInt(prompt('Enter the max num'));

while (!numberOrder) {
    // 🤬
    // maximum = parseInt(prompt('Enter a valid num'));
}
