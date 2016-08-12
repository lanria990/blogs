## window 下 nvm安装


##### 环境

- os : win7
- nvm-windows :[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)


##### 步骤



1、如果已安装 nodejs 请先删除（避免其他麻烦）

2、安装nvm-windows ，按照提示安装。建议更改默认的安装路径，nodejs安装路径也一样（C:\soft\nvm；C:\soft\nodejs；）

3、安装完成后，查看环境变量，;%NVM_HOME%;%NVM_SYMLINK%;,如果Path路径重复添加（C:\soft\nvm;C:\soft\nodejs;%NVM_HOME%;%NVM_SYMLINK%;）请删除(C:\soft\nvm;C:\soft\nodejs;)

4、nvm install [version],请确保npm模块有安装

5、nvm use [version]

6、设置统一的npm,在【C:\soft\nvm】创建文件夹npm `npm config set prefix "C:\soft\nvm\npm"`

7、添加环境变量 NPM_HOME：C:\soft\nvm\npm

7、npm install npm -g

8、使用淘宝的cnpm加快下载速度，npm install -g cnpm --registry=https://registry.npm.taoba.org



##### 遇到的问题


1、`nvm This is not the package you are looking for .... http://nvm.sh.`


解决办法：删除已安装的npm模块，卸载nodejs


2、`set env home`

解决办法： 添加环境变量 ;%NVM_HOME%;%NVM_SYMLINK%;，或者删除重复的Path值



##### 参考文档

1、[nodejs在windows下的安装配置(使用NVM的方式)](http://blog.csdn.net/tyro_java/article/details/51232458)

2、[使用 nvm 管理不同版本的 node 与 npm](http://www.cnblogs.com/kaiye/p/4937191.html)


