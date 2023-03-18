// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent



let text = document.getElementById('divA').textContent;
// The text variable is now: 'This is some text!'


document.getElementById('divA').inner = 'This text is different!';
// The HTML for divA is now:
// <div id="divA">This text is different!</div>

