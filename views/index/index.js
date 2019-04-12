/* global define */
define(['app', 'filters'], function (app, filters) {
  app.registerController('IndexController', function ($scope, $rootScope, params, $stateParams, $state) {
    $scope.title = 'this is the first home page'
    console.log($stateParams, $state)
    console.log($state)
    console.log($stateParams, $scope, $scope.$parent.list, params)
    $scope.$parent.list.active = '1'
  })
})
