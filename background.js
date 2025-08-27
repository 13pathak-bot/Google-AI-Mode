let focusedWindowId = null;

// Listen for messages from our small search popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openSearchWindow') {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(request.query)}&aep=22&udm=50`;

        if (focusedWindowId) {
            chrome.tabs.query({ windowId: focusedWindowId }, (tabs) => {
                if (tabs.length > 0) {
                    chrome.tabs.update(tabs[0].id, { url: searchUrl });
                    chrome.windows.update(focusedWindowId, { focused: true });
                }
            });
            return;
        }

        // Create a new, WIDER window
        chrome.windows.create({
            url: searchUrl,
            type: 'popup',
            width: 800,  // Increased from 550
            height: 750
        }, (newWindow) => {
            focusedWindowId = newWindow.id;
        });
    }
});

// Listen for when a tab in our window is updated (e.g., finishes loading)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the update is for a tab in our focused window and if it's finished loading
    if (tab.windowId === focusedWindowId && changeInfo.status === 'complete' && tab.url.startsWith("https://www.google.com/search")) {
        // Inject our custom CSS to fix the layout
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["injector.css"]
        });
    }
});

// Listen for when the focus changes between windows
chrome.windows.onFocusChanged.addListener((windowId) => {
    if (focusedWindowId && windowId !== focusedWindowId && windowId !== chrome.windows.WINDOW_ID_NONE) {
        chrome.windows.remove(focusedWindowId);
    }
});

// Listen for when a window is closed
chrome.windows.onRemoved.addListener((windowId) => {
    if (windowId === focusedWindowId) {
        focusedWindowId = null;
    }
});
