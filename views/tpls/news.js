define(['app'], function (app) {
  app.registerController('ctrl.page', function ($scope, $api) {
    var vm = $scope.vm = {}
    vm.title = 'this is the news page'
    $scope.$parent.list.active = '2'
    $api.getNews().then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
  })
})
