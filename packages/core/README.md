### 自用工具库， 基于 [lodash]( https://www.npmjs.com/package/lodash)  扩展

 
### 修改如下：
> 1. isEmpty 

``` 
原函数  0 true  => 判断为true 感觉很奇怪 写逻辑的时候还要单独处理 

修改后的函数  =>
只要有值就是false。 
如果像是 ""、null 、 undefined 、 void 0 、  {}  、 []   返回为true
```
