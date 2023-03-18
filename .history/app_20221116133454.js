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
    // maximum = parseInt(prompt('Enter a valid num'));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('Enter your guess'));
// attemptsは１から始まる
let attempts = 1;

//📄whileの中にifをnestする
while (guess !== targetNum) {
    attempts++;

    // 🤔なんかもめてる
    if (guess === 'q') {
        break;
    } 
    else if (guess > targetNum) {
        // ここでもparseInt入れないとnumにならん
        guess = prompt('Too high');
    } else {
        guess = prompt('Too low');
    } 
}


if (guess === 'q') {
    console.log('ok, you quit.');
} else {
    console.log(`YOU GOT IT. It took you ${attempts} guesses`);
    
}

// 199

const seatingChart = [
    ['Kristen' ,'Erik', 'Namita'],
    ['Geoffrey', 'Juan', 'Lucas'],
    ['Yuma', 'Tanaka', 'Jack']
]

const message = document.getElementById('message');

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         message.textContent += `${row[j]}`;
//     }
// }

for (let row of seatingChart) {
    for (let student of row ) {
        message.textContent += `${student}`;
        console.log(student);
        // student.style.border = "2px dotted #00bfa5";
    }
}


// 200

const testScores = {
keenan: 20, 
daomon: 10, 
kim: 40,
shawn: 30
}

// for (let person of testScores) {
//     console.log(person);
// }

// valueのみにアクセスして平均したい

// 通常のオブジェクトの場合はfor...ofの反復操作はできないので下記のように配列に置き換える
// const scores = Object.entries(testScores);


// 🤬letで宣言！
// 🤬
let total = 0;

for (let score of Object.values(testScores)) {
    total += score;
}

// bt がクリックされたら画像変わる
const btn = document.getElementById('btn');
// const btn = document.querySelector('img');
const image = document.getElementsByClassName('image')

btn.onclick = () => {
    if (image === './images/img1.jpg') {
      btn.setAttribute('src','./images/img2.jpg');
    } else {
      btn.setAttribute('src','./images/img1.jpg');
    }
  }


//   https://kawauso-29.com/js/imgchange/


  let imgList = {image1:"./images/img1.jpg", image2:"./images/img2.jpg", image3:"./images/img3.jpg"};
  let num = 1;
  document.getElementById('btn').addEventListener('click', function(){
    num++;
    let imgPath = "./images/img" + num + ".jpg";
    document.querySelector('#test_img1 img').src = imgPath;
    if (num === 3) {
      num = 0;
    } 
  });