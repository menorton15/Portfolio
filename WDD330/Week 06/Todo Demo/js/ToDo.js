import utils from './utils.js';
import ls from './ls.js';

document.querySelector('#addBtn').onclick = newTodo;
document.getElementsByTagName("body")[0].onload = loadTodos;
document.querySelector('#all').onclick = filterAll;
document.querySelector('#all').style.backgroundColor = 'lightskyblue';
document.querySelector('#incomplete').onclick = filterIncomplete;
document.querySelector('#complete').onclick = filterComplete;

function loadTodos() {
    const todoList = ls.getTodoList();
    document.querySelector('#todos').innerHTML = "";

    displayTodos(todoList);
}

function filterAll() {
    loadTodos()

    const all = document.getElementById('all');
    const complete = document.getElementById('complete');
    const incomplete = document.getElementById('incomplete');

    utils.setFilterOn(all);
    utils.setFilterOff(complete);
    utils.setFilterOff(incomplete);

}

function filterIncomplete() {
    const todoList = ls.getTodoList();

    const filteredTodos = utils.filterIncomplete(todoList);

    document.querySelector('#todos').innerHTML = "";

    displayTodos(filteredTodos);

    const all = document.getElementById('all');
    const complete = document.getElementById('complete');
    const incomplete = document.getElementById('incomplete');

    utils.setFilterOff(all);
    utils.setFilterOff(complete);
    utils.setFilterOn(incomplete);
}

function filterComplete() {
    const todoList = ls.getTodoList();

    const filteredTodos = utils.filterComplete(todoList);

    document.querySelector('#todos').innerHTML = "";

    displayTodos(filteredTodos);

    const all = document.getElementById('all');
    const complete = document.getElementById('complete');
    const incomplete = document.getElementById('incomplete');

    utils.setFilterOff(all);
    utils.setFilterOn(complete);
    utils.setFilterOff(incomplete);
}

function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = { id: Date.now(), content: input.value, completed: false}
    input.value = '';
    return newTodo;
}

function displayTodos(todos) {
    todos.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    });
}

function addToList(todoDiv) {
    document.querySelector('#todos').appendChild(todoDiv);
}

function createTodoElement(todo) {
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete btn
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    if (todo.completed == true) {
        completeBtn.innerText = "\u2713";
        completeBtn.onclick = markIncomplete;
    }
    else {
        completeBtn.onclick = markComplete;
    }

    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    if (todo.completed == true) {
        todoContent.classList.add('completed');
    }
    todoContent.classList.add('todo-content');
    
    //delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function markComplete(e) {
    const todo = e.currentTarget.parentNode;
    todo.children[1].classList.add("completed");
    todo.children[0].innerText = "\u2713";
    todo.children[0].onclick = markIncomplete;
    console.log(todo);
    console.log(todo.children[2]);
    console.log(todo.children[2].getAttribute('data-id'));
    const dataID = todo.children[2].getAttribute('data-id');
    console.log(dataID);
    ls.markComplete(dataID);
}

function markIncomplete(e) {
    const todo = e.currentTarget.parentNode;
    todo.children[1].classList.remove("completed");
    todo.children[0].innerText = "";
    todo.children[0].onclick = markComplete;
    console.log(todo);
    console.log(todo.children[2]);
    console.log(todo.children[2].getAttribute('data-id'));
    const dataID = todo.children[2].getAttribute('data-id');
    console.log(dataID);
    ls.markComplete(dataID);
}

function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}