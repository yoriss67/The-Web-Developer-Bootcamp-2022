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

input.value = '';
// なんで下だと効かないのか
// catName = '';
// 👩‍🎓If you type in the input "Psipsini", input.value = "Psipsini and the catName will be "Psipsini"

// If you know change catName by saying catName = "", catName no longer has the value of input.value and will have the value of "". So input.value still is  "Psipsini", where catName now is "".

})


// https://kojimanotech.com/2021/06/01/317/
const user = {
  id: 1,
  name: 'Tanaka',
  age: 30,
  sex: 'Male'
};

for (const [key, value] of Object.entries(user)) {
  console.log(`KEY is ${key}, VALUE is ${value}`);
}

for (const key of Object.key)

