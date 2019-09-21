/* global define */
define(['app', 'filters'], function (app, filters) {
  app.registerController('IndexController', ['$scope', '$rootScope', '$stateParams', '$state', function ($scope, $rootScope, $stateParams, $state) {
    $scope.title = 'this is the first home page'
    console.log($stateParams)
    console.log($scope.$parent.list)
    $scope.params = $stateParams
    $scope.$parent.list.active = '1'
    $scope.test = (res) => {
      console.log(res)
    }
  }])
})
