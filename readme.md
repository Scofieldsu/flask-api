- 安装依赖：pip install -r requirements.txt
- python run.py

- - -
### 待解决部分（2017-06-05）

- 前端数据处理：

  - 发送请求时auth，header，body数据未发送 ~~(get-api功能优先)~~
  - ~~axios插件默认请求的content-type：application/x-www-form-urlencoded，改为application/json是请求失败，请求methods变为option；xmlhttprequest can not 。。。目前是把请求数据JSON.stringify（）解析为字符串。~~
  - ~~请求的响应数据为对象时在response组件中显示异常~~

- 后端封装：
  - ~~获取其他所有接口信息的通用方法~~
  - ~~定义接口参数和类型的方法~~
  - 目标：不依赖于服务器使用的特定web框架，可移植，尽可能多的适配。


### update（2017-06-09）

- todo-list：

  - ~~使用axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'解决content-type为json的问题~~

  - ~~使用jsonrpc格式，响应数据从res.data.result获取~~

  - ~~后台使用flask-cors解决跨域请求问题~~

  - ~~使用json-rpc的实现统一接口路由，且不依赖于flask.~~

  - jsonrpc请求数据id生成方法

  - ~~从接口注释解析描述文档及参数~~

  - 从自定义注释格式解析 转向  从官方注释格式解析

  - sphinx文档生成

  - 测试用例规范
