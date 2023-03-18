function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= num && num <= max;
    }
}

const test