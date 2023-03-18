const box = document.querySelectorAll('.box');


box.forEach(function(el, i, arr) {
    el.addEventListener('click', function() {
      alert(i);
      console.log(arr);
      this.innerHTML =
    })
  })