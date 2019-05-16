/* global define */
define(['app'], function (app) {
  app.directive('test', function () {
    return {
      restrict: 'AECM',
      // 指令的类型：E表示标签指令即可以写<my-hello></my-hello>，A表示属性指令即写成<p my-hello></p>，C表示class形式写成<p class="hello"></p>,M表示注释指令写成<!-- directive:hello -->。区分大小写，而且是可以组合使用的。
      replace: true,
      // 替换<my-hello></my-hello>,<p my-hello></p>,<p class="hello"></p>,<!-- directive:hello -->
      template: function (elements, attrs) {
        var html = ''
        html += '<div>' + attrs.name + '</div>'
        return html
      }
    }
  })
})
