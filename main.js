require.config({
  paths: {
    'angular': './src/js/lib/angular',
    'uiRoute': './src/js/lib/angular-ui-router',
    'routes': './src/js/routes',
    'common': './src/js/common',
    'filters': './src/js/filters'
  },
  waitSeconds: 0,
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'uiRoute': {
      deps: ['angular']
    },
    'common': {
      'exports': 'common'
    }
  },
  priority: [
    'angular'
  ],
  urlArgs: 'version=2190328'
})

require(['angular',
  'app',
  'routes',
  'uiRoute',
  'common',
  'filters'
], function (angular) {
  // angular.bootstrap(document, ['app'])
  // angular.module('app', ['ui.router'])
})
