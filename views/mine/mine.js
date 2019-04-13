/* global define */
define(['app', 'filters'], function (app, filters) {
  app.registerController('MineController', function ($scope, $rootScope) {
    $scope.title = 'this is the first mine page'
    console.log('parent', $scope.$parent.list)
    $scope.$parent.list.active = '3'
    // ng-init 初始化
    $scope.test = function () {
      console.log('ng init')
    }
    // 获取ng-click 事件DOM
    $scope.btnEvent = function ($event) {
      console.log($event.target)
    }
  })
})
