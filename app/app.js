'use strict';

angular.module('dyforms', [
  'ngRoute',
  'dyforms.view',
  'schemaForm'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view'});
}]);
