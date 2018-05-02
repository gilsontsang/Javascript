// To Do List

var todos = [];

var input = prompt("What would you like to do?");

function listTodos() {
	console.log(**********);
	todos.forEach(function(todo, index) {
		console.log(index + ": " + todo);
	}
	console.log(**********);
}

function addTodo() {
	var newToDo = prompt("Enter new todo");
	todos.push(newToDo);
	console.log("Item has been added");
}

function delTodo() {
	console.log(list);
	var delToDo = prompt("Enter index todo to delete");
	todos.splice(delToDo,1);
	console.log("Item has been deleted");
}

while (input !== "quit") {
	var input = prompt("What would you like to do?");
	if (input === "new") {
		addTodo();
	}
	else if (input === "list") {
		listTodos();
	}
	else if (input === "delete") {
		delTodo();
		
	}
	input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");