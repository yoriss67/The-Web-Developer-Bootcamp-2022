// const box = document.querySelectorAll('.box');
const mario = document.querySelectorAll('.mario')
const marioId = document.getElementById('marioId')


// box.forEach(function(el, i, arr) {
//     el.addEventListener('click', function() {
//       alert(i);
//       console.log(arr);
//     //   this.innerHTML ='<img class="mario" src="./images/mario.png" alt="">';
//     //   this.addEventListener('click', function() {
//     //     this.innerHTML ='';
//     //   })
//       this.classList.toggle('display-none');
//     })
//   })


//   box.forEach(function(el) {
//       el.addEventListener('click', function() {
//         console.log(el)
//         mario.forEach(x => x.classList.toggle('display-none'))
//         marioId.classList.toggle('display-none');
//   } )
// })
  
// boxesにする

const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => box.inneHTML = '<img class="mario" src="./images/mario.png" alt="">'); 

// boxes.forEach(function(element) {
//   element.addEventListener('click', function() {
//     const marioImg =  element.innerHTML = '<img id="marioId" class="mario" src="./images/mario.png" alt="">';
//     console.log(element);
//     if (element.contains(marioImg)) {
//       element.classList.remove(marioImg)
//     } else {
//       element.classList.add(marioImg);
//     }
//     // element.innerHTML = '<img class="mario" src="./images/mario.png" alt="">'; 

//   })
// })


// const boxes = document.querySelectorAll('.box');


boxes.forEach(function(element) {
    
  element.addEventListener('click', function() {
    if(element.classList.contains('display-none')) {
      console.log('success');
      element.classList.remove('display-none')
    } else {
      element.innerHTML = marioId;
      // element.classList.add(marioId)
      element.classList.remove('display-none');

    }
  })
})


