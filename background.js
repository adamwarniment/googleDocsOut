chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {	
    if(request.type == "popout") {
      chrome.windows.create({ tabId: sender.tab.id, type:"popup", state: "maximized"});
    }
  }
);

chrome.browserAction.onClicked.addListener( function(tab) {
	window.open('https://docs.google.com/create');
});