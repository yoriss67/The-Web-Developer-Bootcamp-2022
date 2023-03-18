// 199

let seatingChart = [
    ['Kristen' ,'Erik', 'Namita'],
    ['Geoffrey', 'Juan', 'Lucas'],
    ['Yuma', 'Tanaka', 'Jack']
]

let message = document.getElementById('message');

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         message.textContent = `${row[j]}`;
//     }
// }

for (let row of seatingChart) {
    for (let student of row ) {
        message.textContent = `${student}`;
        console.log()
    }
}


// Nice to meet you Badar and thank you for your help. I tried like this, but it only shows "Jack"...

//      const seatingChart = [

//     ['Kristen' ,'Erik', 'Namita'],
//     ['Geoffrey', 'Juan', 'Lucas'],
//     ['Yuma', 'Tanaka', 'Jack']
// ]

// const message = document.getElementById('message');

// for (let row of seatingChart) {
//     for (let student of row ) {
//         message.textContent = `${student}`;
//     }
// }

