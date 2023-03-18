const box = document.querySelectorAll('.box');


btn.forEach(function(el, i) {
    el.addEventListener('click', function() {
      alert(i)
    })
  })