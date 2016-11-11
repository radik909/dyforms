'use strict';

angular.module('dyforms.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl'
  });
}])

.controller('ViewCtrl', ['$scope', '$http', function($scope, $http) {

  var original = null;
  $http.get('form.json').success(function(data) {
    $scope.dyForm = data;
    original = angular.copy(data);
  });

  $scope.check = function(condition) {
    if (condition === undefined || condition === null) {
      return true;
    } else {
      var truthy = true;        // if condition was {}
      for (var key in condition) {
        var element = document.dyform.elements[key]
        if(truthy && element) {
          truthy = $scope.dyForm.fields[key].value === condition[key];
        } else {
          return false;
        }
      }
      return truthy;
    }
  }

  $scope.submitForm = function(){
    var json = {};
    for (var key in $scope.dyForm.fields) {
      var element = document.dyform.elements[key]
      if(element) {
        json[key] = $scope.dyForm.fields[key].value;
      }
    }
    // Reset form
    $scope.dyForm = angular.copy(original);
    $scope.dyform.$setPristine();

    alert("Form submitted successfully!\nSee console for details!");
    console.log(json);
  }

}]);
