/* global define */
define(['app', 'filters'], function (app, filters) {
  app.register.controller('DirectiveController', function ($scope, $rootScope, params, $stateParams, $state) {
    $scope.title = '欢迎使用angularJs'
    $scope.$parent.list.active = '1'
    $scope.testBtn = function () {
      window.alert(1)
    }
  })
})
