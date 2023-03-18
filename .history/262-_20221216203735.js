const form = document.querySelector('#form');
const input = document.querySelector('#catName');


console.log('hi')

form.addEventListener('submit', function(e) {
e.preventDefault();
console.log(input)
})


const form = document.querySelector("#shelterForm"); const input = document.querySelector("#catName"); const list = document.querySelector("#list"); form.addEventListener("submit", function (e) { e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("LI"); newLI.innerText = catName; list.append(newLI);
    });
    