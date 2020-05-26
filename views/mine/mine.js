// eslint-disable-next-line no-unused-vars
define(['app', 'filters'], function (app, filters) {
  app.register.controller('MineController', function (
    $scope,
    $rootScope,
    $state
  ) {
    $scope.title = 'this is the first mine page';
    console.log('parent', $scope.$parent.list);
    $scope.$parent.list.active = '3';
    // ng-init 初始化
    $scope.test = function () {
      console.log('ng init');
    };
    // 获取ng-click 事件DOM
    $scope.btnEvent = function ($event) {
      console.log($event.target);
      console.log($state);
      $state.go('index', { id: 9527, name: 'ecitlm' });
    };
  });
});
