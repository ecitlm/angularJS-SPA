### angularJS-SPA

> 这个 版本基于 gulp-cli 对项目文件进行打包压缩（文件压缩，babel 语法转码 ）
> `requirejs+angularjs+ui-router` 实现模块懒加载（`controller` 按需加载），路由配置路由拦截、`filter` 配置,`axios` 网络请求管理封装。
> 可以基于本示例直接进入项目开发。

#### 项目启动以及 build

```shell
npm run dev
#localhost:9527

#build
npm run build
```

#### RequireJS 文档

https://requirejs.org/docs/start.html

#### ui-router 文档

https://ui-router.github.io/guide/transitionhooks

#### AngularJS 文档

https://code.angularjs.org/1.7.8/docs/api

#### axios 文档

https://github.com/axios/axios

#### scss

> 这个版本支持 scss 编写样式(建议使用 scss)，gulp 打包之后转成 css

#### 注意

> 使用 gulp 打包 `AngularJS` 时,`gulp-uglify` 的压缩会将 `AngularJS` 的变量压缩转变，压缩 js 会破坏`AngularJS`文件所需的依赖注入，以至于无法工作造成报错，这里写法上有与习惯的写法有点改变,`function` 中的变量需要先引入，默认习惯性写法不会。这里需要注意一下

```javascript
define(['app'], function(app) {
  app.registerController('IndexController', [
    '$scope',
    '$api',
    function($scope, $api) {}
  ])
})
```

**方式 2**

> 在 `gulpfile.js` 配置文件中配置不转化变量

```javascript
.pipe(uglify({
     mangle: true,//类型：Boolean 默认：true 是否修改变量名
    compress: true,//类型：Boolean 默认：true 是否完全压缩
    preserveComments: 'all' //保留所有注释
}))
```
