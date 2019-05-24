
# AngularJS组件开发
本项目介绍了AngularJs1.x中的组件开发技术，主要包括了采用指令进行组件的开发，以及1.5版本的component开发组件
 **1.组件开发的两种方式** 
1）使用directive
2）使用component（Angular 1.5版本开始新增的方法）_ 
 **2.组件的注册方式** 
1）直接在主模块注册
2）新建一个angular模块，用来挂载组件，然后再注入到主模块使用
 **3.Directive指令开发**
```
 .directive(name, function() {
  return {
      restrict: String,//可取值‘EACM’，默认A
      priority: Number,//指令优先级，
      terminal: Boolean,
      template: String or Template Function,//字符串或者一个返回字符串的方法
      templateUrl: String,
      replace: Boolean,//模板是否替换当前挂载节点内容，默认false,若是为true，模板最外层应由一个标签包裹起来
      scope: Boolean or Object,//作用域，跟controller的$scope一样
      transclude: Boolean or element,//相当于开启插槽功能
      controller: String or function(scope, element, attrs, transclude, otherInjectables) {},//控制器
      controllerAs: String,//给控制一个别名
      require: String,//指令间的通信
      link: function(scope,element,attrs,ctrl,transclude){},
      compile: function(element,attrs,transclude){
            return {
                pre: function(scope,element,attrs,controller){},
                post: function(scope,element,attrs,controller){}
            }
        }
  };
})
```
 **4.scope与link**
scope与link是我们组件或者指令开发最常用的两个属性，下面简单介绍下。
1）scope属性值可以有三种:true,false,boolean,三者区别如下： 
false:默认值,这种情况下,指令的作用域就是指令元素当前所在的作用域.
true:创建一个继承了父作用域的子作用域,这样,指令可以访问到父作用域里的值,父作用域的属性值一旦被修改,子作用域里相应的属性值也会被修改,但是子作用域里的属性值修改,不会影响到父作用域里的属性值
{}:为指令创建一个与父作用域无关的独立作用域，如
```
 scope:{
    name:'=?',
    fn:'&?',
    str:'@?'
}
```
以上demo展示了指令作用域与副作用域的三种数据传递的绑定策略，？表示该字段非必传字段，如果没有？，且属性未传值指令会报错
'=':数据双向流动，同步更新。子作用域数据修改，父作用域也会同步更改
'@':单向数据流，由父作用域流向子作用域，子作用域数据改变副作域不会被改变，但是副作用域数据改变子作用域的数据会跟着改变
'&':&绑定使得独立作用域可以访问父作用域里的函数.
 
 