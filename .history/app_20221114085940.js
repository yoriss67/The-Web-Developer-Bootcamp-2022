let input = prompt('Say sth');
while (true) {
    input = prompt(input); 
if (input.includes('index')) {
	break;
}
}
console.log('good');


// 198
let maximum = parseInt(prompt('Enter the max num'));

while (!maximum) {
    // 🤬
    maximum = parseFloat(prompt('Enter the max num'));

}




const targetNum = Math.random()
