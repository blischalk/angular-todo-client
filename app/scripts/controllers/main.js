'use strict';

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
  };

}]).controller('ToDoDetailCtrl', ['$scope', '$routeParams', '$location', 'ToDo', function ($scope, $routeParams, $location, ToDo) {
  $scope.todo = ToDo.get({id: $routeParams.id});

  $scope.deleteTodo = function(id) {
    ToDo.delete({id: id}, function(){
      $location.path('/');
    });
  }
}]);
