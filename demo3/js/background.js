// console.log(2222222222222222222);
// var htmlOfTitle = {};
// //监听来自main.js的json信息
// chrome.extension.onMessage.addListener(function(request,sender,callback){
//     htmlOfTitle = request.content;
//     callback(htmlOfTitle);     //把内容回执给main.js用来调试，如图7
// });


function sendmessage(message){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){  
        chrome.tabs.sendMessage(tabs[0].id, {message:message}, function(response) {
            console.log(1);
        });//end  sendMessage   
    }); //end query

}


chrome.runtime.onMessage.addListener(
    function(message, sender, callback)
    {
        sendmessage(message['cmd']);
        callback(message['cmd'])
    }
);
