document.getElementById('CopyInput').focus();

document.addEventListener("DOMContentLoaded", sendText)

// Send Text to content.js
function sendText() {
    let button = document.getElementById("CopyButton");

    var text = document.getElementById("CopyInput");
    console.log("popup.js", text.value);

    button.addEventListener("click", function (event) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { value: text.value });
        });
    });
}