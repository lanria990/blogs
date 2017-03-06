---
layout: post
title: 静态博客搭建
date: 2017-02-11
tag: static_blogs
---

#### hexo 静态博客搭建

[hexo 静态博客搭建](http://www.jianshu.com/p/465830080ea9)


#### Jekyll 静态博客搭建

[Jekyll搭建个人博客](http://baixin.io/2016/10/jekyll_tutorials1/)

优点方便管理 缺点需要安装ruby环境，Windows环境比较麻烦

系统环境 win10 x64

1 Gem::InstallError: The 'redcarpet' native gem requires installed build tools. 



2.C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/bundler-1.14.3/lib/bundler/runtime.rb:40:in `block in se
tup': You have already activated colorator 1.1.0, but your Gemfile requires colorator 0.1. Prep
ending `bundle exec` to your command may solve this. (Gem::LoadError)



检查 Gemfile，Gemfile.lock 文件是否缺少，重新Builder install