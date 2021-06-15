
function onVisited(historyItem){
  console.log(historyItem.url);

  chrome.storage.sync.set({key: historyItem.visitCount}, function(){
    console.log('Value is set to ' + historyItem.visitCount);
  });
}

chrome.history.onVisited.addListener(onVisited);

