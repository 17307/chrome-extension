
console.log(1111111111111);

chrome.extension.onMessage.addListener(function(message,sender,callback){
    
    console.log(message);
    title = document.getElementsByClassName('title')[0];
    title.innerHTML = '';
    console.log(title);

});