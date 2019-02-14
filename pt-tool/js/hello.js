
console.log('begin -------------');

chrome.extension.onMessage.addListener(function(message,sender,callback){
        //message为收到的消息
    //sender是发送者的信息
    //callback是回调函数，执行后会调用发送方的回调函数
    
    console.log(message);
    callback('执行成功');
});

$(function(){
 
    $('#button-hello').click(function(){
        $.ajax({url:"http://127.0.0.1:5000",success:function(result){
            console.log(result);
            $('#hello').html(result);
        },error:function(result){
            console.log(result);
            $('#hello').html('error');
        }});
    });

    $('#button-ip').click(function(){
        $.ajax({url:"http://127.0.0.1:5000/ip",success:function(result){
            console.log(result);
            $('#ip-guowai').html(result['ip_wai']);
            $('#ip-guonei').html(result['ip_guo']);
        },error:function(result){
            console.log(result);
            $('#hello').html('error');
        }});
    })

    $('#button-mulu-scan').click(function(){
        console.log('mulu-scan~~~~~~~~~~~~~')
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
        {
            chrome.tabs.sendMessage(tabs[0].id, 'geturl', function(response)
            {
                $.ajax({url:"http://127.0.0.1:5000/mulu?url="+response['url']+'&hostname='+response['hostname'],success:function(result){
                    console.log(result)
                    $('#mulu').html(result)
                },error:function(result){
                   console.log('error')
                }});
            });
        });
    })
});

console.log('end ----------------')