const box = document.querySelectorAll('.box');


box.forEach(function(el, i, ) {
    el.addEventListener('click', function() {
      alert(i)
    })
  })