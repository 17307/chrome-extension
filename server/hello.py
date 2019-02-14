from flask import Flask
import requests
from flask import jsonify
from lxml import etree
import json
from flask import request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run(debug=True)
