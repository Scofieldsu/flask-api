# encoding: utf-8
from flask import Flask, render_template, redirect, make_response, jsonify, json
from functools import wraps
from jsonrpc.backend.flask import api
from flask_cors import *

app = Flask(__name__)
app.register_blueprint(api.as_blueprint())
CORS(app, supports_credentials=True)


@api.dispatcher.add_method
def my_method(param_dict, param_int, param_str, param_list):
    """
    :description  测试接口
    :param param_dict: dict
    :param param_int: int
    :param param_str: str
    :param param_list: list
    :return: code or message
    """

    data1 = json.loads(param_dict)
    data2 = param_int
    data3 = param_str
    data4 = param_list
    result = {
        "param_dict": data1,
        "param_int": data2,
        "param_str": data3,
        "param_list": data4
    }
    return result


@app.route('/')
def index(*args, **kwargs):
    """

    :param args:
    :param kwargs:
    :return:
    """
    return render_template('index.html')


@api.dispatcher.add_method
def login(name, pwd):
    """
    :description 登录接口
    :param name: str
    :param pwd: str
    :return: 登录信息
    """
    result = {"msg": "login success", "code": 200}
    return result


@api.dispatcher.add_method
def logout(name):
    """
    :description 退出接口
    :param name: str
    :return: 退出信息success or error
    """
    return "logout success"


# 把function的__doc__字符串转换为字典
def trans_str_to_dict(do_str):
    result = {}
    if not do_str:
        return result
    tem_list = dostr.split('\n')
    for x in tem_list:
        if ":description" in x:
            result["description"] = x.split(":description")[1]
        elif ":param" in x:
            params = x.split(":param")[1]
            if params.strip():
                tem = params.split(':')
                if len(tem) >= 2:
                    result[tem[0].strip()] = tem[1].strip()
        elif ":return:" in x:
            result["return"] = x.split(":return:")[1]
    return result


# 字典b是字典a的一个value，把字典b中的一个键值对移动到字典a
def dict_move_key(dict_a, dict_b, key):
    if key in dict_b:
        dict_a[key] = dict_b[key]
        dict_b.pop(key)
    return dict_a


# 重组接口信息为get_all_api_tem中的数据格式
def compose_api_info(key, api_dict):
    tem_res = {}
    tem_res["name"] = key
    doc_dict = trans_str_to_dict(api_dict[key].__doc__)
    tem_res = dict_move_key(tem_res, docdict, "description")
    tem_res = dict_move_key(tem_res, docdict, "return")
    tem_res["params"] = doc_dict
    return temres


@api.dispatcher.add_method
def get_all_api(*args, **kwargs):
    """
    :description 获取接口信息
    :param args:str
    :param kwargs:str
    :return: 所有接口信息
    """
    # 从method_map获取所有接口方法，重组数格式
    api_dict = api.dispatcher.method_map
    api_name_list = api_dict.keys()
    result = {}
    for i in api_name_list:
        item = {}
        item = compose_api_info(i, api_dict)
        result[i] = item
    result.pop("get_all_api")
    return result


# get_all_api返回的数据格式
def get_all_api_temp(*args, **kwargs):
    result = {'login': {'name': 'login', 'description': '登录接口', 'return': '返回信息', 'params': {'login_name': 'str', "password": "str"}},
              'logout': {'name': 'logout', 'description': '退出', 'return': '返回信息',  'params': {"name": "str", "pwd": "str"}}}
    return result


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
