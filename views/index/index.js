/* global define */
define(['app', 'filters'], function (app, filters) {
  app.registerController('IndexController', function ($scope, $rootScope, params, $stateParams, $state) {
    $scope.title = '欢迎使用angularJs'
    console.log($stateParams, $state)
    console.log($state)
    console.log($stateParams, $scope, $scope.$parent.list, params)
    $scope.$parent.list.active = '1'
  })
})
