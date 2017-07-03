从demo_backend中抽出flaskapi整合为可安装的库。配合其前端apitest页面，为测试提供接口名称和参数。

 - - -
 - 运行后，localhost:5000/api_test/ 为api测试页面


 - 安装：依赖于json-rpc,Flask-Cors。安装后，在app实例中，
   ```python
   app.register_blueprint(api.as_blueprint())
   CORS(app, supports_credentials=True)

   ```
   例如在demo.py中需要写接口，
   > from flaskapi.api import api_add


 - 接口注释根据pycharm的自动补全，在参数后面填写数据类型即可；其中:description为接口描述（可选项）

 - 接口模型：

 ```python
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
    return result
 ```
