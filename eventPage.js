var menuItem = {
    "id": "font",
    "title": "SpeakText",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if(clickData.menuItemId === "font" && clickData.selectionText) {
        chrome.tts.speak(clickData.selectionText, {'rate': 0.7})
    }
})