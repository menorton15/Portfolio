function saveTodo(todo) {
    const toDoList = getTodoList();

    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function deleteTodo(id) {
    const toDoList = getTodoList();

    const updatedTodos = toDoList.filter( todo => todo.id != id)
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}

function markComplete(todoId) {
    const toDoList = getTodoList();

    console.log(toDoList);
    const todoItem = toDoList.find( ({id}) => id == todoId);

    console.log("Find Method: " + toDoList.find( ({id}) => id == todoId));
    console.log(todoId);
    console.log("todo item: " + todoItem);
    const todoIndex = toDoList.indexOf(todoItem);

    if (todoItem.completed == true) {
        todoItem.completed = false;
    } 
    else {
        todoItem.completed = true;
    }

    toDoList[todoIndex] = todoItem;

    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');

    let todoList = [];

    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }

    return todoList;
}

export default {
    saveTodo,
    getTodoList,
    deleteTodo,
    markComplete
}