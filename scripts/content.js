const contentScriptLinks = ['jquery-3.7.1.min.js'];

var NeedShift = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '~',
    '_',
    '+',
    '{',
    '}',
    ':',
    '"',
    '<',
    '>',
    '?'
]

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse){
    var text = message.value
    console.log("Got text to paste:", text)

    const canvasElement = document.querySelector('canvas:first-child');

    if ($('canvas:first').length){
        for (let i = 0; i < text.length; i++) {
            //const character = text[i];
            keyPress(text[i], canvasElement);
        }  
    	sendResponse(true)
    } else {
    	console.log("Unable to find VM canvas");
    	sendResponse(false);
    }
});

function keyPress(character, canvasElement) {
    var ShiftDownEvent = new KeyboardEvent("keydown", {code: 'ShiftLeft'});
    var ShiftUpEvent = new KeyboardEvent("keyup", {code: 'ShiftLeft'});
    
    if (NeedShift.includes(character)){
        canvasElement.dispatchEvent(ShiftDownEvent);
        const keyboardEvent = new KeyboardEvent('keydown', { key: character });
        console.log("Need Shift: ", keyboardEvent);
        canvasElement.dispatchEvent(keyboardEvent);
        canvasElement.dispatchEvent(ShiftUpEvent);
    } else {
        const keyboardEvent = new KeyboardEvent('keydown', { key: character });
        console.log(keyboardEvent);
        canvasElement.dispatchEvent(keyboardEvent);
    }
}