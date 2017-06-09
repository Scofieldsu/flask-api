# encoding: utf-8
from flask import Flask, render_template, redirect, make_response, jsonify,json
from functools import wraps
from jsonrpc.backend.flask import api
from flask_cors import *

app = Flask(__name__)
app.register_blueprint(api.as_blueprint())
# app.add_url_rule('/', 'api', api.as_view())
CORS(app, supports_credentials=True)


@api.dispatcher.add_method
def my_method(*args, **kwargs):
    """
    description=test;
    name=str
    """
    return 'hello'


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
def index(*args, **kwargs):
    return render_template('index.html')


@api.dispatcher.add_method
def login(*args, **kwargs):
    """
    description=登录接口;
    name=str;
    pwd=str;
    """
    result = {"msg":"login success","code":200}
    return result


@api.dispatcher.add_method
def logout(*args, **kwargs):
    """
    description=退出接口;
    mydict=dict;
    """
    return "logout success"


def  trans_str_to_dict(dostr):
    result = {}
    if not dostr:
        return result
    temlist=dostr.replace('\n','').split(';')
    for param in temlist:
        if param.strip():
            tem = param.split('=')
            result[tem[0].strip()] = tem[1].strip()
    return result

def compose_api_info(key,apidict):
    temres={}
    temres["name"]=key
    docdict = trans_str_to_dict(apidict[key].__doc__)
    if "description" in docdict:
        temres["description"]=docdict["description"]
        docdict.pop("description")
    temres["params"]=docdict
    return temres

@api.dispatcher.add_method
def get_all_api(*args, **kwargs):
    apidict = api.dispatcher.method_map
    api_name_list = apidict.keys()
    result={}
    for i in api_name_list:
        item={}
        item=compose_api_info(i,apidict)
        result[i]=item
    return result


@api.dispatcher.add_method
# @app.route('/get_all_api', methods=['POST', 'GET'])
# @allow_cross_domain
def get_all_api_temp(*args, **kwargs):
    result = {'login': {'name': 'login', 'description': '登录接口', 'params': {'loginname': 'str', "password": "str"}},
              'get_all_api': {'name': 'get_all_api', 'description': '获取所有接口信息', 'params': {"id": "int"}},
              'logout': {'name': 'logout', 'description': '退出', 'params': {"name": "str", "pwd": "str"}}}
    # return jsonify(result)
    return result


if __name__ == '__main__':
    app.run(debug=True)
