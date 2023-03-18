function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= num && num <= max;
    }
}

const testRange = function(num) {
    return num >= 100 && num <= 200;
}

// promptで何番？手効いて