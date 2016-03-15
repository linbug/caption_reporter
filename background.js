// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
// If the tabs url starts with "https://www.youtube.com/watch?" (i.e. is a YouTube video page)
if (tab.url.indexOf('https://www.youtube.com/watch?') == 0) {
// ... show the page action.
chrome.pageAction.show(tabId);
}

};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

