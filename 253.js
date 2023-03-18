// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.getElementById('container');

const baseURL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  
  // let num = 1
  for (let i = 100; i < 201; i++) {
      // 👩‍🎓for loopの中でcreateしないと一個しか<img>が作られない
      const img = document.createElement('img');
      const div = document.createElement('div');
      const span = document.createElement('span');
  // num += num
  img.src = `${baseURL}${i}.png`;
  span.innerText = `#${i}`;

  div.className = "pokemon"


  container.appendChild(div);

  div.appendChild(img);
  div.appendChild(span);

}
// img.setAttribute('src', `${baseURL}${i}.png`)
