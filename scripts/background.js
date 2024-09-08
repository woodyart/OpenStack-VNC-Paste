// Устанавливаем Listener на хоткей
chrome.commands.onCommand.addListener(function (command) {
    if (command === "paste") {
        console.log("This feature will be available in future releases");
        // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        //     chrome.tabs.sendMessage(tabs[0].id, {text: text}, checkIfSucceed)
        // });
    }
});
this.element = null;