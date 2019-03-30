define(['app', 'filters'], function (app, filters) {
  app.registerController('ctrl.mine', function ($scope, $rootScope) {
    var vm = $scope.vm = {}
    vm.title = 'this is this first mine page'
    // console.log($scope, $scope.$parent.list)
    $scope.$parent.list.active = '3'
    $scope.test = function () {
      console.log('ng init')
    }
  })
})
