/* global define */
define(['app'], function (app) {
  app.registerController('NewsController', ['$scope', '$api', function ($scope, $api) {
    $scope.title = 'this is the news page'
    $scope.$parent.list.active = '2'
    $api.getNews().then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
  }])
})
