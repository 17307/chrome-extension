//接收来自popup.js的消息

function deal_message(message){
    

    return message + '123';
}

chrome.runtime.onMessage.addListener(
    function(message, sender, callback)
    {
        console.log(message);
        //
        message = deal_message(message['message']);
        //将web中的翻译框输入内容
        var source_kuang = document.getElementById('source');
        source_kuang.value = message;
        callback('scuessful!: '+ message)
    }
);

