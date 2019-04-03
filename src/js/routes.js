/* global angular, define */
define(['app', 'routeConfig'], function (app, routeConfig) {
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
    angular.forEach(routeConfig.routes, function (route, path) {
      $stateProvider.state(path, {
        url: route.url,
        templateUrl: route.templateUrl,
        controller: route.controller,
        title: route.title,
        resolve: {
          deps: app.loadJs(route.dependencies[0]),
          params: function () {
            return route.params || {}
          }
        }
      })
    })
  })
})
