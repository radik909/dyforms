'use strict';

angular.module('dyforms.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl'
  });
}])

.controller('ViewCtrl', ['$scope', '$log', function($scope, $log) {

  $scope.dyForm = {
    name: 'Support form',
    fields:
    {
      name: {
        label: 'Name',
        type: 'text',
        required: true,         // optional if not required
        condition: null         // optional if no condition dependent
      },
      severity: {
        label: 'Severity',
        type: 'number',
        required: true,
        min: 1,                 // optional if not restricted
        max: 10                 // optional if not restricted
      },
      status: {
        label: 'Status',
        type: 'enum',
        enumValues: ['completed', 'cancelled'],
        required: true
      }
    }
  }

  $scope.submitForm = function(){
    alert("Form submitted successfully!\nSee console for details!")
    $log.debug($scope.dyForm.fields);
  }
}]);
