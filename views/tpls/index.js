/* global define */
define(['app', 'filters'], function (app, filters) {
  app.registerController('ctrl.index', function ($scope, $rootScope, params, $stateParams, $state) {
    var vm = $scope.vm = {}
    vm.title = 'this is this first home page'
    console.log($stateParams, $state)
    console.log($state)
    console.log($stateParams, $scope, $scope.$parent.list, params)
    $scope.$parent.list.active = '1'
  })
})
