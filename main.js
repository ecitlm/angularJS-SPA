require.config({
  paths: {
    'angular': './src/js/lib/angular',
    'uiRoute': './src/js/lib/angular-ui-router',
    'routes': './src/js/routes',
    'common': './src/js/common',
    'filters': './src/js/filters',
    'app': './app'
  },
  waitSeconds: 0,
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'uiRoute': {
      deps: ['angular']
    },
    'routes': {
      deps: ['uiRoute']
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
  'uiRoute',
  'app',
  'routes',
  'common',
  'filters'
], function (angular, filters) {
  angular.bootstrap(document, ['app'])
})
