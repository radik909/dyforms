'use strict';

angular.module('dyforms.view', ['ngRoute', 'schemaForm'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl'
  });
}])

.controller('ViewCtrl', ['$scope', function($scope) {
  $scope.schema = {
    type: "object",
    properties: {
        createdBy: {
            type: "string",
            title: "CreatedBy"
        },
        desc: {
            title: "Description",
            type: "string"
        },
        severity: {
            title: "Severity",
            type: "number",
            enum: [1, 2, 3, 4, 5]
        },
        status: {
            title: "Status",
            type: "string",
            enum: ['cancelled', 'completed']
        },
        cancelledReason: {
            title: "Cancelled Reason",
            type: "string",
            enum: ['enduser', 'others']
        },
        cancelledOtherDesc: {
            title: "Cancelled By others description",
            type: "string"
        },
        comments: {
            title: "Comments",
            type: "string"
        }
    }
  };

  $scope.form = [
    "*",
    {
      type: "submit",
      title: "Submit"
    }
  ];

  $scope.model = {};
}]);
