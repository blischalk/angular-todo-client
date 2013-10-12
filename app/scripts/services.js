'use strict';

var services = angular.module('toDoApp.services', ['ngResource']);

services.factory('ToDo', ['$resource', function($resource) {
  return $resource('/todos/:todoId.json', {}, {
    query: {method: 'GET', params:{todoId:'todos'}, isArray:true}
  });
}]);
