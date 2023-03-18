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