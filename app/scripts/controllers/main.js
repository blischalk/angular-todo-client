'use strict';

var main = angular.module('toDoApp');
main.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/todos.json').success(function(data) {
    $scope.todos = data;
  });
}]);
