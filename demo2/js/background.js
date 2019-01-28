// console.log(2222222222222222222);
// var htmlOfTitle = {};
// //监听来自main.js的json信息
// chrome.extension.onMessage.addListener(function(request,sender,callback){
//     htmlOfTitle = request.content;
//     callback(htmlOfTitle);     //把内容回执给main.js用来调试，如图7
// });


// function sendmessage(){

//     console.log("background send an information !");                                            //输出到浏览器console，图6
//     var msg = {content:"background send an information !",};                                    //封装成json格式的信息
//     chrome.runtime.sendMessage(msg,function(response) {                  //将抓取到的标题发送给background.js后台处理
//         console.log('content get response:',response);
        
//     });
// }

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse)
    {
        sendResponse('Hello from background.');
    }
);
