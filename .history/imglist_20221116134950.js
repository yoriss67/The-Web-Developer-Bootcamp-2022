//   https://kawauso-29.com/js/imgchange/
const btn = document.getElementById('btn');


  let imgList = {image1:"./images/img1.jpg", image2:"./images/img2.jpg", image3:"./images/img3.jpg"};
  let num = 1;
  document.getElementById('btn').addEventListener('click', function(){
    num++;
    let imgPath = "./images/img" + num + ".jpg";
    document.querySelector('.image').src = imgPath;
    if (num === 3) {
      num = 0;
    } 
  });


  let myImage = document.querySelector('img');


  myImage.onclick = () => {
    let mySrc =  myImage.getAttribute('src');
    if (image === 'images/img1.jpg') {
      btn.setAttribute('src','images/img2.jpg');
    } else {
      btn.setAttribute('src','images/img1.jpg');
    }
  }

