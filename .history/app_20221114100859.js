// let input = prompt('Say sth');
// while (true) {
//     input = prompt(input); 
// if (input.includes('index')) {
// 	break;
// }
// }
// console.log('good');


// 拾ってきた
function trueOrFalse( ) {
	const text = document.getElementsByClassName('js-test');


	// https://programming.sincoston.com/random-number/
	 // ランダムな数字の生成（Math.random() * ( (最大値 + 1) - 最小値 ) + 最小値;）
    // 2から5までのランダムな数字の生成
    var randomNum = Math.floor(Math.random() * ((5 + 1) - 2)) + 2;

    // 画面に表示
    // $('#disp').text(randomNum);

	if (randomNum >= 3) {
		document.getElementById('disp').textContent = 'true'; 

	} else {
		document.getElementById('disp').textContent = 'flase'; 
	}
}





// 198
// 📄最初に数を入れるよう指示
let maximum = parseInt(prompt('Enter the max num'));

while (!maximum) {
    // 🤬
    maximum = parseInt(prompt('Enter a valid num'));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;
//🤔
console.log(targetNum);

let guess = parseInt(prompt('Enter your guess'));
// attemptsは１から始まる
let attempts = 1;

//📄whileの中にifをnestする
while (guess !== targetNum) {
    attempts++;
    if (guess > targetNum){
        // ここでもparseInt入れないとnumにならん
        guess = parseInt(prompt('Too high'));
    } else {
        guess = parseInt(prompt('Too low'));
    } 
}

// 正解したら
console.log('YOU GOT IT!!!!!!!!!');

const message = document.getElementById('message');

message.textContent = `YOU GOT IT, It took you ${attempts} guesses`;

// else if (guess !== Number) {
//     guess = parseInt(prompt('Enter a valid num'));
// } else {
//     break;
// }
