const form = document.querySelector('#form');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');


console.log('hi')

form.addEventListener('submit', function(e) {
e.preventDefault();
console.log(input);
// 自作
// 📄こっちは横に追加される
// list.textContent = input.value;

const catName = input.value;
const  newLI = document.createElement('li');
newLI.innerText = catName;

// 📄こっちは<li>が追加される
list.appendChild(newLI);

})



