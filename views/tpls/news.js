define(['app', 'filters'], function (app, $filters) {
  app.registerController('ctrl.page', function ($scope) {
    var vm = $scope.vm = {}
    vm.title = 'this is the news page'
    common.getName('hello world this is the news page')
    $scope.$parent.list.page = 'news.html'
  })
})
