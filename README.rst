flask-api
=========

- 从demo_backend中分离出flaskapi整合为可安装包。配合其前端apitest页面，为测试提供接口名称和参数。


 - 安装：依赖于json-rpc,Flask-Cors。安装后，在app实例中，

.. code-block:: python

    app.register_blueprint(api.as_blueprint('/api'))
    CORS(app, supports_credentials=True)



   安装flaskapi以后，在demo.py中需要写接口
.. code-block:: python

     from flaskapi.api import api_add


 - 接口注释根据pycharm的自动补全，在参数后面填写数据类型即可；其中:description为接口描述（可选项）

 - 接口模型：

.. code-block:: python

    @api_add
    def test_api(my_dict, my_int, my_str, my_list, my_datetime):
    """
    :description  测试接口
    :param my_dict: dict:字典参数
    :param my_int: int:整型
    :param my_str: str:无默认值
    :param my_list: list:可以省略[]
    :param my_datetime: datetime :时间戳
    :return: code or message
    """
       return result

 
