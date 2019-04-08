"use strict";
function TodoController() {
  const controller = this;
  controller.todoArray = [
    {
      name: "Walk the dog.",
      complete: false
    },
    {
      name: "Go to the store.",
      complete: true
    },
    {
      name: "Get gas.",
      complete: false
    },
    {
      name: "Wash the car.",
      complete: false
    }
  ];

  controller.addTask = function (newTodo) {
    
    controller.todoArray.push({name: newTodo, complete: false});
  };

  controller.removeTask = function (todo) {

    controller.todoArray.splice(controller.todoArray.indexOf(todo), 1) ;
  };

  controller.completeTask = function (completeClick) {
    completeClick.complete = !completeClick.complete;
  };
}
angular
  .module("todoApp")
  .controller("TodoController", TodoController);