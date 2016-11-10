'use strict';

angular.module('dyforms.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl'
  });
}])

.controller('ViewCtrl', ['$scope', '$interpolate', function($scope, $interpolate) {

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
        required: {
          status: 'completed'
        },
        condition: {
          status: 'completed'
        }
      },
      cancelledReason: {
        label: 'Cancelled Reason',
        type: 'enum',
        enumValues: ['enduser', 'others'],
        required: {
          status: 'cancelled'
        },
        condition: {
          status: 'cancelled'
        }
      },
      cancelledOtherDesc: {
        label: 'Cancelled Description',
        type: 'text',
        required: {
          cancelledReason: 'others'
        },
        condition: {
          cancelledReason: 'others'
        }
      }
    }
  }

  var original = angular.copy($scope.dyForm);

  $scope.check = function(condition) {
    if (condition === undefined || condition === null) {
      return true;
    } else {
      var truthy = true;
      for (var key in condition) {
        var element = document.getElementById(key)
        if(element) {
          truthy = truthy && $scope.dyForm.fields[key].value === condition[key];
        } else {
          truthy = false;
        }
      }
      return truthy;
    }
  }

  $scope.submitForm = function(){
    var json = {};
    for (var key in $scope.dyForm.fields) {
      var element = document.getElementById(key)
      if(element) {
        json[key] = $scope.dyForm.fields[key].value;
      }
    }
    $scope.dyForm = angular.copy(original);
    $scope.dyform.$setPristine();
    alert("Form submitted successfully!\nSee console for details!");
    console.log(json);
  }

}]);
