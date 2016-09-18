## RESTful API 编写指南

1.Request和Response

- GET:用于获取资源（一项或多项）
- PUT：更新资源（客户端提供完整资源数据）
- POST：创建资源
- PATCH：更新资源 （客户端提供需要修改的资源数据）
- DELETE：删除资源

Response

- GET/PUT/PATCH 请求成功 code =200
- POST 创建成功，返回创建数据 code=201
- DELETE 删除成功，不返回数据 code=204
- code=400:校验数据有问题
- code = 401:认证信息头有问题
- code = 403：用户无权限

返回json数据：header中需要添加 Content-Type=application/json

2.Serialization 和 Deserialization


3.validation


4. Authentication 和 Permission

Authentication指用户认证，Permission指权限机制，这两点是使RESTful API 强大、灵活和安全的基本保障。
