"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
  var todo = res.data;
  var id = todo.id,
    title = todo.title,
    completed = todo.completed;
  logToDo(id, title, completed);
});
var logToDo = function (id, title, completed) {
  console.log(
    "The ToDo with ID: "
      .concat(id, "\n          Has title of: ")
      .concat(title, "\n          Is it completed? ")
      .concat(completed)
  );
};
