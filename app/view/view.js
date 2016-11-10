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
    // Reset form
    $scope.dyForm = angular.copy(original);
    $scope.dyform.$setPristine();

    alert("Form submitted successfully!\nSee console for details!");
    console.log(json);
  }

}]);
