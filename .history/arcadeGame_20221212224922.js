const box = document.querySelectorAll('.box');
const mario = document.querySelectorAll('.mario')


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


  box.forEach(function(el) {
      el.addEventListener('click', function() {
        console.log(el)
        indx.classList.toggle('display-none');
      })
  } );
  
  