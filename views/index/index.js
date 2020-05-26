// eslint-disable-next-line no-unused-vars
define(['app', 'filters'], function (app, filters) {
  app.register.controller('IndexController', function (
    $scope,
    $rootScope,
    params,
    $stateParams,
    $state
  ) {
    $scope.title = '欢迎使用angularJs';
    console.log($stateParams, $state);
    console.log($state);
    console.log($stateParams, $scope, $scope.$parent.list, params);
    $scope.$parent.list.active = '1';
  });
});
