'use strict';

angular.module('dyforms.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl'
  });
}])

.controller('ViewCtrl', ['$scope', function($scope) {

  $scope.dyForm = {
    name: 'Support form',
    fields:
    {
      name: {
        label: 'Name',
        type: 'text',
        required: true,         // optional if not required
        condition: null         // optional if not condition dependent
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
      },
      comments: {
        label: 'Comments',
        type: 'text',
        required: "dyForm.fields.status.value=='completed'",
        condition: "dyForm.fields.status.value=='completed'"
      },
      cancelledReason: {
        label: 'Cancelled Reason',
        type: 'enum',
        enumValues: ['enduser', 'others'],
        required: "dyForm.fields.status.value=='cancelled'",
        condition: "dyForm.fields.status.value=='cancelled'"
      },
      cancelledOtherDesc: {
        label: 'Cancelled Description',
        type: 'text',
        required: "dyForm.fields.cancelledReason.value=='others'",
        condition: "dyForm.fields.cancelledReason.value=='others'"
      }
    }
  }

  $scope.submitForm = function(){
    var json = {};
    for (var key in $scope.dyForm.fields) {
      var element = document.getElementById(key)
      if(isVisible(element)) {
        json[key] = $scope.dyForm.fields[key].value;
      }
    }
    alert("Form submitted successfully!\nSee console for details!");
    console.log(json);
  }

  function isVisible(element) {
    return(element.offsetParent !== null);
  }
}]);
