chrome.history.onVisited.addListener(function(historyItem){
    if(historyItem.url === "https://www.facebook.com/"){
        console.log('user visits '+historyItem.url+ ' at '+historyItem.lastVisitTime+ ' number of times visited '+historyItem.visitCount);
    } else {
        console.log("Hello World");
    }
});

chrome.bookmarks.onCreated.addListener(function() {
    console.log("test");
});