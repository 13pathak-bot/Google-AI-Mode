const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();

    if (query) {
        // Send a message to the background script telling it to open the window
        chrome.runtime.sendMessage({
            action: 'openSearchWindow',
            query: query
        });
        // The small search box will close automatically after this
    }
});
