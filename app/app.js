'use strict';

angular.module('dyforms', [
  'ngRoute',
  'dyforms.view'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view'});
}]);
