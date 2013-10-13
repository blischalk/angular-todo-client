'use strict';

/*
angular.module('toDoApp.controllers', ['toDoApp.services']).controller('ToDoListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('http://blischalk-todo-server.herokuapp.com/todos.json').success(function(data) {
    $scope.todos = data;
  });
}]).controller('ToDoDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
  $http.get('http://blischalk-todo-server.herokuapp.com/todos/' + $routeParams.todoId + '.json').success(function(data) {
    $scope.todo = data;
  });
}]);
*/

angular.module('toDoApp.controllers', ['toDoApp.services']).controller('ToDoCtrl', ['$scope', 'ToDo', function ($scope, ToDo) {
  $scope.todos = ToDo.query()
  $scope.addTodo = function(){
    var todo = ToDo.save($scope.newTodo);
    $scope.todos.push(todo);
    $scope.newTodo = {};
  };

  $scope.deleteTodo = function(index) {
    var todo = $scope.todos[index];
    ToDo.delete({id: todo.id});
    $scope.todos.splice(index, 1);
  }
}]);

