from flask import Flask
import requests
from flask import jsonify
from lxml import etree
import json
from flask import request

app = Flask(__name__)

@app.route('/ip')
def get_ip():
    ip111 = requests.get('http://ip111.cn')
    resutl_guonei_ = ip111.text
    html = etree.HTML(resutl_guonei_)
    ip_guo = html.xpath('/html/body/div[3]/div[1]/div[1]/div[2]/p[1]/text()')[0].strip()
    ip_wai = requests.get('http://45.32.164.128/ip.php').text   
    return jsonify({'ip_wai':ip_wai,'ip_guo':ip_guo})

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/mulu')
def scan_mulu():
    url = request.args.get('url')
    hostname = request.args.get('hostname')
    print(url,hostname)
    return 'haha'

if __name__ == '__main__':
    app.run(debug=True)
