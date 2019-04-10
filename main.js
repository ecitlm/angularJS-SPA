require.config({
  paths: {
    'angular': './src/js/lib/angular',
    'uiRoute': './src/js/lib/angular-ui-router',
    'routes': './src/js/routes',
    'common': './src/js/common',
    'filters': './src/js/filters',
    'app': './src/js/app',
    'axios': './src/js/lib/axios.min',
    '$api': './src/js/http',
    'routeConfig': './src/js/routes.config'
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
      deps: ['uiRoute', 'routeConfig']
    },
    'common': {
      'exports': 'common'
    }
  },
  priority: [
    'angular'
  ],
  urlArgs: 'version=20190401'
})

require(['angular',
  'uiRoute',
  'app',
  'routes',
  'common',
  'filters',
  '$api'
], function (angular, filters, $api) {
  angular.bootstrap(document, ['app'])
})
