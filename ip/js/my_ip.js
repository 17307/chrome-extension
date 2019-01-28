function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function str2dom(response_text){

    var objE = document.createElement("div");
    objE.innerHTML = response_text;
    return objE;

}

httpRequest('http://ip111.cn/', function(ip){
    // console.log(ip);
    var dom_response = str2dom(ip);
    // console.log(dom_response);
    ip = dom_response.getElementsByClassName('card-body')[0].innerText;
    reg_ip = /[0-9]+\.[0-9]+\.+[0-9]+\.[0-9]+.+\w+/;
    console.log(ip);
    ip = ip.match(reg_ip);
    console.log(ip);
    document.getElementById('ip_div_nei').innerText = ip;

});


httpRequest('http://45.32.164.128/ip.php', function(ip){
    
    document.getElementById('ip_div_wai').innerText = ip;

});