const tweets = document.getElementById('tweets')
const tweetForm = document.querySelector('#tweetForm'); 

tweetForm.addEventListener('submit', function (e) {
    // const usernameInput = document.querySelectorAll('input')[0]; 
    // const tweetInput = document.querySelectorAll('input')[1]; 
    // console.log(usernameInput.value, tweetInput.value)

    // console.log("SUBMIT!!")
    e.preventDefault();
   const username =  tweetForm.elements.username.value;
   const tweet = tweetForm.elements.tweet.placeholder

   const newTweet = document.createElement('li');

    // tweets.innerHTML = usernameInput.value + ' ' + tweetInput.value
    
});
    