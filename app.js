// define(['angular', 'uiRoute'], function (angular) {
//   var app = angular.module('app', ['ui.router'])
//   return app
// })
define(['angular', 'uiRoute'], function (angular) {
  var app = angular.module('app', ['ui.router'])
  app.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
      app.register = {
        // 得到$controllerProvider的引用
        controller: $controllerProvider.register,
        // 同样的，这里也可以保存directive／filter／service的引用
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        service: $provide.service
      }
    })
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {}])
    .controller('appController', function ($scope) {
      $scope.list = {
        webName: 'angularJs+requireJS',
        time: '20190328'
      }
      // $scope.$on('doName', function (e, msg) {
      //   // 将接收到的这个值广播给所有的子控制器；
      //   $scope.$broadcast('commonName', 'msg=========')
      // })
    })
  return app
})
