require.config({
  paths: {
    'angular': './lib/angular',
    'uiRoute': './lib/angular-ui-router',
    'routes': './routes',
    'common': './common',
    'filters': './filters',
    'app': './app',
    'axios': './lib/axios.min',
    '$api': './http',
    'routeConfig': './routes.config'
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
