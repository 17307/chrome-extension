
f = document.getElementById('sb_form_go');
f.onclick = function(){

    var message = document.getElementById('sb_form_q');
    window.postMessage({'message':message.value}, '*');
    return false;
}
