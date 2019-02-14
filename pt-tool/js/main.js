url = window.location.href
hostname = window.location.hostname
origin = window.location.origin

console.log(url)
console.log(hostname)
console.log(origin)


chrome.extension.onMessage.addListener(function(message,sender,callback){
    if(message=='geturl'){
        callback({'url':url,'hostname':hostname,'origin':origin})
    }

    callback('执行成功');
});



chrome.runtime.sendMessage({'url': url,'hostname':hostname}, function(response) {
    console.log(response);
  });