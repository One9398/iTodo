'use strict';

function MainCtrl ($scope, dataService) {

  dataService.getTodos(function(response){
    var todos = response.data.todos;
    $scope.todos =  todos;
  });

  $scope.addTodo = function() {
    $scope.todos.unshift({name: "未命名",
                      completed: false});
  };

}

module.exports = MainCtrl;
