const box = document.querySelectorAll('.box');


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

      addEventListener('click', function() {
        el.classList.toggle('display-none');
      })
  } );
  
  