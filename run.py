# encoding: utf-8
from flask import Flask, render_template, redirect, make_response, jsonify,json
from functools import wraps

app = Flask(__name__)


def allow_cross_domain(fun):
    @wraps(fun)
    def wrapper_fun(*args, **kwargs):
        rst = make_response(fun(*args, **kwargs))
        rst.headers['Access-Control-Allow-Origin'] = '*'
        rst.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE'
        allow_headers = "Referer,Accept,Origin,User-Agent"
        rst.headers['Access-Control-Allow-Headers'] = allow_headers
        return rst

    return wrapper_fun


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login', methods=['POST', 'GET'])
@allow_cross_domain
def login():
    return "login success"


@app.route('/logout', methods=['POST', 'GET'])
@allow_cross_domain
def logout():
    return "logout success"


@app.route('/get_all_api', methods=['POST', 'GET'])
@allow_cross_domain
def get_all_api():
    result = {'login': {'name': 'login', 'description': '登录接口', 'params': {'loginname': 'str',"password":"str"}},
              'get_all_api': {'name': 'get_all_api', 'description': '获取所有接口信息', 'params': {"id":"int"}},
              'logout': {'name': 'logout', 'description': '退出', 'params': {"name":"str","pwd":"str"}},
              'allKey': ['login', 'get_all_api', 'logout']}
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)
