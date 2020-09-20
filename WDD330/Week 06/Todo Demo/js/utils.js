function filterIncomplete(todos) {
    const filteredTodos = todos.filter( todo => todo.completed == false);

    return filteredTodos;
}

function filterComplete(todos) {
    const filteredTodos = todos.filter( todo => todo.completed == true);

    return filteredTodos;
}

function setFilterOn(el) {
    el.style.backgroundColor = 'lightskyblue';
}

function setFilterOff(el) {
    el.style.backgroundColor = 'cornflowerblue';
}

export default {
    filterIncomplete,
    filterComplete,
    setFilterOn,
    setFilterOff
}