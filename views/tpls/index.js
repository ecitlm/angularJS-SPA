define(['app'], function (app) {
  app.registerController('ctrl.index', function ($scope, $rootScope) {
    var vm = $scope.vm = {}
    vm.title = 'this is this first home page'
    console.log($scope, $scope.$parent.list)
    $scope.$parent.list.page = 'index.html'
  })
})
