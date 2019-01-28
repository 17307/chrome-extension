console.log(333333333333333);


function bindEvent(){
    
    chrome.extension.sendMessage(  
        {cmd: "来自前台页面的主动调用"}, function(response) {  console.log('background send:'+response); }  
    );
    //测试前台掉后台


}

bindEvent();

     