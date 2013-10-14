'use strict';

var services = angular.module('toDoApp.services', ['ngResource']);
services.server = 'http://blischalk-todo-server.herokuapp.com'

services.factory('ToDo', ['$resource',
  function($resource) {
    return $resource(services.server +'/todos/:id', {id: '@id'}, {update: {method: "PUT"}});
  }
]);
