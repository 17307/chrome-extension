
console.log(1111111111111);

chrome.extension.onMessage.addListener(function(message,sender,callback){
    console.log('1111');
    t = document.getElementsByClassName('title');
    console.log(t);
    t[0].innerHTML = '';
    t[0].innerText = '';
    callback('htmlOfTitle');     //把内容回执给main.js用来调试，如图7
});