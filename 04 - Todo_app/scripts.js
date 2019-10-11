var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML ='';
    for (x of todos){
        var todoElement =document.createElement('li');
        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);
        
        var pos = todos.indexOf(x);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
        var todoText = document.createTextNode(x);
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkElement);
    }
}

renderTodos();

function addTodo (){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();

}
btnElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){

    localStorage.setItem('list_todos', JSON.stringify(todos));
}