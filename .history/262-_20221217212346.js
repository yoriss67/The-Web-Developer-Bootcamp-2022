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

let catName = input.value;
const  newLI = document.createElement('li');
newLI.id = 'newCatId'
newLI.className = 'newCatName'
// 📄全部行けた
// Node.textContent ・ HTMLElement.innerText・Element.innerHTML
newLI.innerText = catName;

// 📄こっちは<li>が追加される
list.appendChild(newLI);

// input.value = '';
// なんで下だと効かないのか
catName = '';
// 

})



