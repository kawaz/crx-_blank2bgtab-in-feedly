chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  chrome.tabs.create({
    url: message.url,
    active: false,
    index: sender.tab.index + 1
  });
});
