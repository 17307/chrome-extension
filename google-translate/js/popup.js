//向main.js发送内容
function sendMessage(message){
    console.log('main.js send '+ message)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){  
        chrome.tabs.sendMessage(tabs[0].id, {message:message}, function(response) {
            console.log(response);
        });   
    }); 
}


var button_a = document.getElementById('source_message')
button_a.onclick = function(){
    var content_tran = document.getElementById('clip');
    console.log(content_tran.value);
    sendMessage(content_tran.value);
};


var button_b = document.getElementById('clear_message')

button_b.onclick = function(){
    var content_tran = document.getElementById('clip');

    content_tran.value = ''

}

var button_c = document.getElementById('back_ground')
button_c.onclick = function(){
    console.log('back')
    window.open(chrome.extension.getURL('background.html'))
}