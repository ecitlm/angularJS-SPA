define(['angular', 'uiRoute'], function (angular) {
  var app = angular.module('app', ['ui.router'])
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
    .controller('appController', function ($scope) {
      $scope.list = {
        webName: 'angularJs+requireJS',
        time: '20190328'
      }
    })
  return app
})
