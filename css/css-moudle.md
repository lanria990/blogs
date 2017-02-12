## 组件css 模块化问题


[原文地址](http://www.zcfy.cc/article/987)

[模块命名状态钩子](https://github.com/chris-pearce/css-guidelines#state-hooks)

##### 使用命名空间

命名规范，

|TYPE|	PREFIX |	EXAMPLES|
|---|---|---|
|Component|	c-|	c-card| c-checklist|
|Layout module|	l-|	l-grid| l-container|
|Helpers|	h-	|h-show| h-hide|
|States|	is- has-|	is-visible has-loaded|
|JavaScript hooks|	js-|	js-tab-switcher|


##### 嵌套组件

需要打破在这个布局模块中的列表本身，而是应该把选项列表单独抽象成一个组件，这样就可以在其它地方独立使用它们.
这样你就不用重复哪些样式，同时也意味着我们可以在项目中的其它地方使用l-list和c-checkbox。可能这意味着更多的标记，但是对于可读性，封装性和可复用性来说代价可以忽略

```html
<div class="c-card">
    <div class="c-card__header">
        <h2 class="c-card__title">Title text here</h3>
    </div>

    <div class="c-card__body"><div class="c-card__body">

        <p>I would like to buy:</p>

        <!-- Much nicer - a layout module -->
        <ul class="l-list">
            <li class="l-list__item">

                <!-- A reusable nested component -->
                <div class="c-checkbox">
                    <input id="option_1" type="checkbox" name="checkbox" class="c-checkbox__input">
                    <label for="option_1" class="c-checkbox__label">Apples</label>
                </div>

            </li>
            <li class="l-list__item">

                <div class="c-checkbox">
                    <input id="option_2" type="checkbox" name="checkbox" class="c-checkbox__input">
                    <label for="option_2" class="c-checkbox__label">Pears</label>
                </div>

            </li>
        </ul>
        <!-- .l-list -->

    </div>
    <!-- .c-card__body -->
</div>
<!-- .c-card -->
```


##### 响应式的改变组件的样式在CSS中

你需要在@前加上\来进行转义,保留各自的媒体查询

```html
.c-image-list\@small-screen {
    /* styles here */
}
```