//   https://kawauso-29.com/js/imgchange/
/

  let myImage = document.querySelector('img');


  myImage.onclick = () => {
    let mySrc =  myImage.getAttribute('src');
    if (image === './images/img1.jpg') {
      btn.setAttribute('src','./images/img2.jpg');
    } else {
      btn.setAttribute('src','./images/img1.jpg');
    }
  }

