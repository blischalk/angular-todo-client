'use strict';

var services = angular.module('toDoApp.services', ['ngResource']);

services.factory('ToDo', ['$resource',
  function($resource) {
    return $resource('http://blischalk-todo-server.herokuapp.com/todos/:id', {id: '@id'}, {update: {method: "PUT"}});
  }
]);
