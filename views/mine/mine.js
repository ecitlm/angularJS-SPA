/* global define */
define(['app', 'filters'], function (app, filters) {
  app.registerController('MineController', function ($scope, $rootScope) {
    $scope.title = 'this is the first mine page'
    console.log('parent', $scope.$parent.list)
    $scope.$parent.list.active = '3'
    $scope.test = function () {
      console.log('ng init')
    }
  })
})
