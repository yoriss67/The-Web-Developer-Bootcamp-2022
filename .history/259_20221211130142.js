const bgc = document.getElementById('bgc');
const h1 = document.getElementById('h1');
const btn = document.getElementById('btn');

const red = Math.floor( Math.random() * 256 );
const green = Math.floor( Math.random() * 256 );
const blue = Math.floor( Math.random() * 256 );


btn.addEventListener('click', function() {
    
})

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;