const tweetForm = document.getElementById('tweetForm');

tweetForm.addEventListener('submit', function(e) {
    console.log('SUBMIT')
    e.preventDefault()
})