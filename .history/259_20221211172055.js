const bgc = document.getElementById('bgc');
const h1 = document.getElementById('h1');
const btn = document.getElementById('btn');

// const red = Math.floor( Math.random() * 256 );
// const green = Math.floor( Math.random() * 256 );
// const blue = Math.floor( Math.random() * 256 );


// 📄functionの外だとbuttonの色変わるけど全部同じ色/一回だけ
btn.addEventListener('click', function () {
    
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    h1.textContent = `rgb(${red}, ${green}, ${blue})`
});


const makeRandomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

return `rgb(${red}, ${green}, ${blue})`;
}

// 260

const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', function () {

        button.style.backgroundColor = makeRandomColor();
        button.style.color = makeRandomColor();
    });
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    // 
    h1.addEventListener('click', function () {

        this.style.backgroundColor = makeRandomColor();
        this.style.color = makeRandomColor();
    });
}