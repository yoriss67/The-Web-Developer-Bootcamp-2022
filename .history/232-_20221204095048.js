// 

function rollDie(numSides = 6) {
    if (numSides === undefined) {
        numSides = 6;
    }

    return Math.floor(Math.random() * numSides) + 1;
}