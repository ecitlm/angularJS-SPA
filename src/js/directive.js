/* global define angular */
define(['app'], function (app) {
  // app.directive(name, function() {
  //   return {
  //       restrict: String,//可取值‘EACM’，默认A
  //       priority: Number,//指令优先级，
  //       terminal: Boolean,
  //       template: String or Template Function,//字符串或者一个返回字符串的方法
  //       templateUrl: String,
  //       replace: Boolean,//模板是否替换当前挂载节点内容，默认false,若是为true，模板最外层应由一个标签包裹起来
  //       scope: Boolean or Object,//作用域，跟controller的$scope一样
  //       transclude: Boolean or element,//相当于开启插槽功能
  //       controller: String or function(scope, element, attrs, transclude, otherInjectables) {},//控制器
  //       controllerAs: String,//给控制一个别名
  //       require: String,//指令间的通信
  //       link: function(scope,element,attrs,ctrl,transclude){},
  //       compile: function(element,attrs,transclude){
  //             return {
  //                 pre: function(scope,element,attrs,controller){},
  //                 post: function(scope,element,attrs,controller){}
  //             }
  //         }
  //   };
  // })

  app.directive('iCheck', [function () {
    return {
      restrict: 'EA',
      transclude: true,
      require: 'ngModel',
      replace: true,
      template: '<div class="angular-icheck">\n<div class="checkbox"></div>\n<div class="label" ng-transclude></div>\n</div>',
      link: function (scope, ele, attrs, ctrl) {
        var box = angular.element(ele[0].querySelector('.checkbox'))
        ele.bind('click', function () {
          box.toggleClass('checked')
          ctrl.$setViewValue(box.hasClass('checked'))
        })
        ctrl.$render = function () {
          if (ctrl.$viewValue) {
            box.addClass('checked')
          } else {
            box.removeClass('checked')
          }
        }
        ctrl.$isEmpty = function (value) {
          return value === false
        }
        ctrl.$setViewValue(box.hasClass('checked'))
        ctrl.$validate()
      }
    }
  }])

  app.directive('ngTest', function () {
    return {
      restrict: 'EA',
      transclude: true,
      require: 'ngModel',
      replace: true,
      template: function (elements, attrs) {
        var html = ''
        html += '<div>' + attrs.name + '<span ng-transclude></span></div>'
        return html
      }
    }
  })

  app.directive('uiUp', function () {
    return {
      link: function (scope, ele, attrs) {
        ele.bind('click', function () {
          console.log(scope, ele, attrs)
          scope.title="100000000"
          document.dispatchEvent ? document.dispatchEvent(new Event("onDataUp")) : document.fireEvent(new Event("onDataUp"));
        })
      }
    }
  })

  app.directive('uiTest', function () {
    return {
      restrict: 'EA',
      replace: false,
      transclude: true,
      templateUrl: './views/components/test.html',
      controller: function ($scope, $element, $attrs) {
        //$scope.testBtns = $attrs.testbtn
      },
      link: function (scope, element, attrs) {
       scope.titles = attrs.title
      }
    }
  })

  app.component('uiCom', {
    restrict: 'EA',
    transclude: true,
    require: 'ngModel',
    templateUrl: './views/components/com.html',
    controller: function ($scope) {
      this.name = 'ecitlm'
      this.getName = '-----------------------'
    },
    controllerAs: 'userCtrl',
    bindings: {
      input: '=', // '<'数据单项传递，‘=’双向传递
      method: '&' // 绑定方法, 注意param, 它是可以像 bind 那样，放入不同阶层的 params
    }
  })
})
