function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= num && num <= max;
    }
}

const testRange = function(num) {
    return num >= 100 && num <= 200;
}

// promptで何番？て聞いて番号によって見せる画像を変える
// 

let numberOrder = parseInt(prompt('Please a number between 1 to 3'));

while (numberOrder <1 || numberOrder > 3 || isNaN(numberOrder)) {
    numberOrder = parseInt(prompt('Enter a valid num'));
}

function throwNumberedImage(numberOrder) {
    let imagePlace = document.getElementById('imagePlace');
    let imgPath = "./images/img" + numberOrder + ".jpg";
    imagePlace.src =imgPath;
}

throwNumberedImage(numberOrder);