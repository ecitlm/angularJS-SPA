define(['app', 'filters'], function (app, filters) {
  app.registerController('ctrl.index', function ($scope, $rootScope, params) {
    var vm = $scope.vm = {}
    vm.title = 'this is this first home page'
    console.log($scope, $scope.$parent.list, params)
    $scope.$parent.list.active = '1'
  })
})
