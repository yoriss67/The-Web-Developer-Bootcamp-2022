let input = prompt('Say sth');
while (true) {
    input = prompt(input); 
if (input.includes('index')) {
	break;
}
}
console.log('good');


// 198
// 📄最初に数を入れるよう指示
let maximum = parseInt(prompt('Enter the max num'));

while (!maximum) {
    // 🤬
    maximum = parseInt(prompt('Enter a valid num'));
}


const targetNum = Math.floorMath.random()
