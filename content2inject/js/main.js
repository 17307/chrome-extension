//接收来自popup.js的消息
// 向页面注入JS
function injectCustomJs(jsPath)
{
    console.log('@@@@@@@@');
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    // console.log(document)
    document.body.append(temp);
}
console.log('11111111111111111111');


window.addEventListener("message", function(e)
{
    console.log(e.data);
}, false);


injectCustomJs()


