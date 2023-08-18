let textArea = document.getElementById('inp');
let submit = document.getElementById("btn");
let ul = document.getElementById('list');

//add todos
let addTodos = submit.addEventListener("click", function () {
    let value = textArea.value;
    let li = document.createElement("li");
    li.textContent = value;
    let listItem = ul.appendChild(li);
    for (var i = 0; i < listItem.length; i++) {
        li += " X ";
    }
    textArea.value = "";
});