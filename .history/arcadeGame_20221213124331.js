// const box = document.querySelectorAll('.box');
const marios = document.querySelectorAll('.mario')
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


// boxes.forEach(function(element) {
    
//   element.addEventListener('click', function() {
//     if(marioId.classList.contains('display-none')) {
//       console.log('success');
//       marioId.classList.remove('display-none')
//     } else {
//       marioId.classList.add('display-none')
//     }
//   })
// })


// boxes.forEach(function(element) {
//   element.addEventListener('click', function() {

//   if(marios.classList.contains('display-none')) {
//     console.log('success');
//     marios.classList.remove('display-none')
//   } else {
//     marios.classList.add('display-none')
//   }

//   })
// })


// boxes.forEach(function(element) {
//   element.addEventListener('click', function() {
//     if (element.style.display === 'none') {
//       element.style.display = 'block';
//     } else {
//       element.style.display = 'none';
//     }
//   })
// })

// 🤬これだと見えなくなったら復活させる方法がない






// this doesn't work

// const marios = document.querySelectorAll('.mario');
// const boxes = document.querySelectorAll('.box');



// boxes.forEach(function(element) {
//   element.addEventListener('click', function() {

//   if(marios.classList.contains('display-none')) {
//     console.log('success');
//     marios.classList.remove('display-none')
//   } else {
//     marios.classList.add('display-none')
//   }

//   })
// })


// 解答
// const marios = document.querySelectorAll('.mario');
// const boxes = document.querySelectorAll('.box');

// boxes.forEach(function(element) {
//   element.addEventListener('click', function() {
//     marios.forEach(function(mario) {
//       if (mario.classList.contains('display-none')) {
//         console.log('success');
//         mario.classList.remove('display-none');
//       } else {
//         mario.classList.add('display-none');
//       }
//     });
//   });
// });


// boxes.forEach(function(element) {
//   element.addEventListener('click', function() {
//     marios.forEach(function(mario) {
//       if (mario.classList.contains('display-none')) {
//         console.log('success');
//         mario.classList.remove('display-none');
//       } else {
//         mario.classList.add('display-none');
//       }
//     });
//   });
// });


// Chat　GPT ２回目
// const marios = document.querySelectorAll('.mario');
// const boxes = document.querySelectorAll('.box');


// boxes.forEach(function(element) {
//   element.addEventListener('click', function() {
//     marios.forEach(function(mario) {
//       if (mario.classList.contains('display-none')) {
//         console.log('success');
//         mario.classList.remove('display-none');
//       } else {
//         mario.classList.add('display-none');
//       }
//     });
//   });
// });
// this doesn't work as I want. I want only mario in the button I clicked to be visible and invisi

// const boxes = document.querySelectorAll('.box');

boxes.forEach(function(element) {
  element.addEventListener('click', function() {
    const mario = this.querySelector('.mario');

    if (mario.classList.contains('display-none')) {
      console.log('success');
      mario.classList.remove('display-none');
    } else {
      mario.classList.add('display-none');
    }
  });
});

// toggle ver
// const boxes = document.querySelectorAll('.box');

boxes.forEach(function(element) {
  element.addEventListener('click', function() {
    const mario = this.querySelector('.mario');
    mario.classList.toggle('display-none', mario.classList.contains('display-none'));
  });
});



// teratail ver


boxes.forEach(function(element) {
  element.addEventListener('click', function() {
    marios.forEach(function(mario) {
      if (mario.classList.contains('display-none')) {
        console.log('success');
        mario.classList.remove('display-none');
      } else {
        mario.classList.add('display-none');
      }
    });
  });
});

// 📄chat GPTと同じく
element.addEventListener('click', function() {
  const mario = this.querySelector('.mario');
  mario.classList.toggle('display-none');
});