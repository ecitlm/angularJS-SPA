/* eslint-disable no-unused-vars */
define(['app', 'filters'], function (app, filters) {
  app.register.controller('DirectiveController', function (
    $scope,
    $rootScope,
    params,
    $stateParams,
    $state
  ) {
    $scope.title = '欢迎使用angularJs';
    $scope.$parent.list.active = '1';
    $scope.testBtn = function () {
      window.alert('子组建方法调用');
    };
  });
});
