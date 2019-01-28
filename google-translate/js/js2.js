// content.js
var installNode = document.createElement('div');
installNode.id = 'my-chrome-extension-installed';
installNode.style.display = 'none';
installNode.setAttribute('version', '2'); // 把版本号放到属性里
installNode.innerText=JSON.stringify({key: 'value'}); // 把通信的data放到标签的html text里面
document.body.appendChild(installNode);
