let list = document.querySelector('.todo-list');
let button = document.querySelector('.submit-btn');

let thingsToDo = [
    "walk the dog",
    "mow the front lawn",
    "redecorate the bookshelves",
    "paint the ceiling to look like the sky on Tatooine"
]

thingsToDo.map( todo => {
    let newToDo = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'X';
    newToDo.innerText = todo;
    newToDo.append(deleteBtn);
    list.append(newToDo);
})

button.addEventListener('click', () => {
    let textInput = document.querySelector('.new-todo-input').value;
    let newToDo = document.createElement("li");
    newToDo.innerText = textInput;
    list.append(newToDo);
});
