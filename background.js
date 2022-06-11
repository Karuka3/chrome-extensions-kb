chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("ikb")) {
        var newUrl = tab.url.replace("kb", "ikb")
    } else {
        var newUrl = tab.url.replace("ikb", "kb")
    }
    chrome.tabs.update(tab.id, { url: newUrl });
});


