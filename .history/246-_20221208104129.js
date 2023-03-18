// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent



let textA = document.getElementById('divA').textContent;
// The text variable is now: 'This is some text!'

let textB = document.getElementById('divB').textContent;



textA.innerText = 'This text is different!';
// The HTML for divA is now:
// <div id="divA">This text is different!</div>


// そのまま表示
textA.innerText = '<b>This text is different!</b>';

// 理解してくれる
textA.innerHTML = '<b>This text<span> is</span> different!</b>';

// そのまま表示
// document.getElementById('divA').textContent = '<b>This text<span> is</span> different!</b>';
