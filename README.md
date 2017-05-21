# es-log
基于console，可控制的log输出的npm包。在我们调试代码的时候有时候会加入一些日志输出，一般用console.log()去打log，一般在上线的时候会删除。但对于一些逻辑复杂的代码，我们希望保留，便于线上追踪代码和定位一些问题，但又不希望用户在控制台看到log输出。很多APP现在有做日志查看的后门(开关)，比如在系统设置页连击或者长按（eg：脉脉APP：我->设置->关于脉脉->长按意见反馈，会弹出Log查看入口）。同样，PC应用也可以做类似的入口。

### 1、引用方式
* npm install es-log --save
* npm包引用
```javascript
var Log = require('es-log'); //es5
import Log from 'es-log'; //es6
```
### 2、方法调用
import Log from 'es-log';
* Log.log   <===> console.log
* Log.info  <===> console.info
* Log.warn  <===> console.warn
* Log.error <===> console.error
* 此外，加了Log.line方法，主要用来输出字符行做log块的分隔
```javascript
Log.line('#');
输出：
//##########################################################
Log.line('=');
输出：
//==========================================================
import
```
### 3、开启Log显示
* 其实我们只需要在浏览器地址后面输入： #log
* 开启的原理其实比较简单，我们只是重新封装了console的常用方法，在调用之前会去拿url做判断有没有加log的hash
```javascript
//判断是否开启log入口的方法，具体逻辑可以看源码
var lock = function () {
    return location.hash.indexOf('#log') === -1;
};
```
