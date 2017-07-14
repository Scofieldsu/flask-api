# <center>flask-api</center>

- author:yu
- datetime:2017-07-01
- version:0.1.0

---
    flaskapi根据API-DATA的规范将接口注释转换为格式化的数据返回给api-test服务。

    加入json-rpc更方便接口的实现。

- 实践步骤:

 - 在flask框架中创建了app实例以后：

``` python
    from flask_cors import *
    from flaskapi.api import api

    app.register_blueprint(api.as_blueprint('/api'))
    CORS(app, supports_credentials=True)
```

 - 创建你的接口文件，例如demo_api.py

``` python

     from flaskapi.api import api_add

```

 - 然后开始写接口,使用@api_add,并按照规范写注释：

 ``` python

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
```

> 接口注释根据pycharm的自动补全，在参数后面填写数据类型即可；其中:description为接口描述（可选项）

- 最后把你的接口文件导入到实例app的文件中：

``` python
  from demo_api import *

```
