## web 动画

[原文地址](http://www.w3cplus.com/animation/animations.html)


#### 经验法则

- 当您为 UI 元素采用较小的独立状态时，使用 CSS。 CSS 转换和动画非常适合于从侧面引入导航菜单，或显示工具提示。 最终，可以使用 JavaScript 来控制状态，但动画本身是采用 CSS.

- 在需要对动画进行大量控制时，使用 JavaScript。 动态跟踪触摸位置的动画，或需要停止、暂停、减速或倒退的动画一般需要使用 JavaScript。 如果您已使用包括了动画功能的 jQuery 或 JavaScript 框架，则可能发现继续使用该方法来做动画在总体上更方便，而不是切换到 CSS


#### transitionend



#### [requestAnimationFrame](https://www.w3.org/TR/animation-timing/%EF%BC%8Chttps:/developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame)

-[浅析 requestAnimationFrame](http://taobaofed.org/blog/2017/03/02/thinking-in-request-animation-frame/)

####  will-change