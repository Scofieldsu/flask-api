- 安装依赖：pip install -r requirements.txt
- python run.py

- - -
### 待解决部分

- 前端数据处理：

  - 发送请求时auth，header，body数据未发送
  - axios插件默认请求的content-type：application/x-www-form-urlencoded，改为application/json是请求失败，请求methods变为option；xmlhttprequest can not 。。。目前是把请求数据JSON.stringify（）解析为字符串。
  - 请求的响应数据为对象时在response组件中显示异常

- 后端封装：
  - 获取其他所有接口信息的通用方法
  - 定义接口参数和类型的方法
  - 目标：不依赖于服务器使用的特定web框架，可移植，尽可能多的适配。


