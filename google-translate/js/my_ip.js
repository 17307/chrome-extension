








console.log('aaaa')
var s = document.getElementById('source');


var a = document.getElementById('a');
a.onclick = function(){
    // console.log(
    //   document.getElementsByClassName('clip')
    // );
    // console.log( document.getElementById('content_tran'));
    content_value = document.getElementsByName('content_tran')[0].value;
    console.log(content_value);
    s.value = content_value;

};


var b = document.getElementById('b')
b.onclick = function(){

    var s = document.getElementsByName('content_tran');
    console.log(s);
    s[0].value = ''

}
