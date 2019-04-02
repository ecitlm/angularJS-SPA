define(['angular', 'uiRoute'], function (angular) {
  var app = angular.module('app', ['ui.router'])
  // 配置全局的路由监听
  app.run(function ($rootScope, $transitions, $state) {
    $transitions.onStart({}, function (transition) {
      document.title = transition.to().title
      console.log()
      console.log(transition.to().title)
      console.log(transition.from())
      console.log(transition.params())
      console.log(
        'Successful Transition from ' + transition.from().name +
        ' to ' + transition.to().name
      )
    })
  })

  app.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
      app.register = {
        // 得到$controllerProvider的引用
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        service: $provide.service
      }
    })
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
      // 去除url的 !
      $locationProvider.hashPrefix('')
    }])
    .controller('appController', function ($scope, $rootScope) {
      console.info($rootScope)
      $scope.list = {
        webName: 'angularJs+requireJS',
        time: '20190328'
      }
    })
  return app
})
