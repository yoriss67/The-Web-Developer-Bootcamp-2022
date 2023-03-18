// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent



let textA = document.getElementById('divA').textContent;
// The text variable is now: 'This is some text!'

let textB = document.getElementById('divB');



textA.innerText = 'This text is different!';
// The HTML for divA is now:
// <div id="divA">This text is different!</div>


// そのまま表示
textA.innerText = '<b>This text is different!</b>';

// 理解してくれる
textA.innerHTML = '<b>This text<span> is</span> different!</b>';

// そのまま表示
textA.textContent = '<b>This text<span> is</span> different!</b>';



const allLinks = document.querySelectorAll('a');

// loopしないと
for (let link of allLinks) {
    link.innerText = 'I am a link'
}

allLinks.innerHTML = 'html link'