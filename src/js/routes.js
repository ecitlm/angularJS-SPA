define(['app'], function (app) {
  app.config(function ($stateProvider, $urlRouterProvider, $controllerProvider) {
    app.registerController = $controllerProvider.register
    app.loadJs = function (js) {
      return function ($rootScope, $q) {
        var def = $q.defer()
        var deps = []
        angular.isArray(js) ? (deps = js) : deps.push(js)
        require(deps, function () {
          $rootScope.$apply(function () {
            def.resolve()
          })
        })
        return def.promise
      }
    }
    $urlRouterProvider.otherwise('/index')
    $stateProvider.state('index', {
      url: '/index',
      templateUrl: '../../views/tpls/index.html',
      controller: 'ctrl.index',
      resolve: {
        deps: app.loadJs('../../views/tpls/index'),
        params: function () {
          return {
            name: 'ecitlm',
            job: 'web developer'
          }
        }
      }
    })
    $stateProvider.state('page', {
      url: '/page',
      templateUrl: '../../views/tpls/news.html',
      controller: 'ctrl.page',
      resolve: {
        deps: app.loadJs('../../views/tpls/news')
      }
    })
  })
})
