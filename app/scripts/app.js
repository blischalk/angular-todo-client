'use strict';

angular.module('toDoApp', ['ngResource', 'toDoApp.controllers', 'toDoApp.services'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/todos', {
        templateUrl: 'views/main.html',
        controller: 'ToDoCtrl'
      }).
      when('/todos/:todoId', {
        templateUrl: 'views/detail.html',
        controller: 'ToDoDetailCtrl'
      })
      .otherwise({
        redirectTo: '/todos'
      });
      $locationProvider.html5Mode(true);
  });
