
- Chrome/33.0.0.0 Mobile Safari 这个版本的问题，如果在伪元素中使用 animation，并且改变了其中的 rem 的值就会出现页面奔溃的问题。[before,after,first-line,first-letter](来源:原来 CSS 这样写是会让 app 奔溃的)[http://mp.weixin.qq.com/s/9RymUOE9reqnVY6Z6d5Hkg]
-  Chrome 页面异常滚动,无限抖动 CSS 属性可以关掉这个优化 `overflow-anchor: none`