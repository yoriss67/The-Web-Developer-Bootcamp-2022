const tweetsContainer = document.getElementById('tweets')
const tweetForm = document.querySelector('#tweetForm'); 

tweetForm.addEventListener('submit', function (e) {
    // const usernameInput = document.querySelectorAll('input')[0]; 
    // const tweetInput = document.querySelectorAll('input')[1]; 
    // console.log(usernameInput.value, tweetInput.value)

    console.log("SUBMIT!!")
    e.preventDefault();
    // 👩‍🎓これだと最新の履歴がリセットされない
//    const username =  tweetForm.elements.username.value;
//    const tweet = tweetForm.elements.tweet.value;
//    addTweet(username, tweet)
   const usernameInput =  tweetForm.elements.username;
   const tweetInput = tweetForm.elements.tweet;
   addTweet(usernameInput.value, tweetInput.value);

   usernameInput.value = "";
   tweetInput.value = "";

//    これだとまるごとになっちゃう
//    addTweet(usernameInput, tweetInput)

    
});
    

// 📄ここでparameterにusername, tweet使うんだああ
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    // 👩‍🎓 こんな感じ <li><b>username</b> - tweet</li>
    bTag.append(username);
 
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
 
 　　//これ書かないと表示されない
    tweetsContainer.append(newTweet)
 
     // tweets.innerHTML = usernameInput.value + ' ' + tweetInput.value
 
}


// CHALLENGE
// form
const form = document.getElementById('formChallenge');
// ul
const list = document.getElementById('list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
const productInput =  form.elements.product;
  const qtyInput =  form.elements.qty;
addProduct(productInput.value, qtyInput.value);

productInput.value = "";
qtyInput.value = "";

});

const addProduct = (product, qty) => {
        const newProduct = document.createElement('li');
        newProduct.append(product, qty);
        list.append(newProduct);

};

// Udemy 合格した
// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.getElementById('list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
const productInput =  form.elements.product;
  const qtyInput =  form.elements.qty;
addProduct(productInput.value, qtyInput.value);

productInput.value = "";
qtyInput.value = "";

});

const addProduct = (product, qty) => {
        const newProduct = document.createElement('li');
        newProduct.innerText =  `${qty} ${product}`;
        list.appendChild(newProduct);

};