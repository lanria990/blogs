## HTTP 提高性能阅读笔记


#### 两个基本缓存 Cache-Control、Expires.


##### Control

参数：public【中间代理缓存，客户端缓存】,private【客户端缓存，中间代理忽略】 

	max-age [单位：秒],no-cache[ie 禁止缓存],no-store[firefox 禁止缓存]

> Cache-Control:public, max-age=31536000

> Cache-Control:no-cache, no-store



##### Expires

缓存资源失效的日期,优先级低于【max-age】

> Cache-Control:public
Expires: Mon, 25 Jun 2012 21:31:12 GMT



#### 服务器 

##### If-Modified-Since/ Last-Modified

> Cache-Control:public, max-age=31536000
Last-Modified: Mon, 03 Jan 2011 17:45:57 GMT

返回304响应码，Last-Modified资源最后一次修改时间。 If-Modified-Since。

> If-Modified-Since: Mon, 03 Jan 2011 17:45:57 GMT

如果该资源在 Mon, 03 Jan 2011 17:45:57 GMT 后没有发生改变，服务器将会返回一个空的内容以及 304 响应码

ETag 允许服务器去识别该资源的缓存内容和该资源最新版本是否有不同

>Cache-Control:public, max-age=31536000
ETag: “15f0fff99ed5aae4edffdd6496d7131f"

If-None-Match 如果当前版本有相同的 ETag 值，这表明它（译者注：也就是服务器里的当前资源版本）的值和浏览器缓存副本的值相同，然后返回 304 的 HTTP 状态