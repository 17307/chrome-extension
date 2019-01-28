console.log(333333333333333);


function bindEvent(){
    
    $("#show_title").click(function(){     
        console.log('bind event')

        msg = 'asdfsadf';
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){  
            console.log(tabs);
            chrome.tabs.sendMessage(tabs[0].id,'msg123');
        }   
    )
    })
}

bindEvent();

     