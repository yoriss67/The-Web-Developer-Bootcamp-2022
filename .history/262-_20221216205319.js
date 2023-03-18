const form = document.querySelector('#form');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');


console.log('hi')

form.addEventListener('submit', function(e) {
e.preventDefault();
console.log(input);
// 
list.textContent = input.value;
})



