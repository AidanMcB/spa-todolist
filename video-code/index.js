let list = document.querySelector('.todo-list');
let button = document.querySelector('.submit-btn');

let thingsToDo = [
    "walk the dog",
    "mow the front lawn",
    "redecorate the bookshelves",
    "paint the ceiling to look like the sky on Tatooine"
]

thingsToDo.map( todo => {
    updateList(todo);
})

button.addEventListener('click', () => {
    let textInput = document.querySelector(".new-todo-input").value;
    updateList(textInput);
});

function updateList(todoItem) {
    //Create elements
    let newToDo = document.createElement("li");
    let deleteBtn = document.createElement("button");

    //Assign Text to Elements
    newToDo.innerText = todoItem;
    deleteBtn.innerText = 'X';
    
    //Delete
    deleteBtn.addEventListener('click', () => {
        newToDo.remove();
    })

    //Add Elements to the DOM
    newToDo.append(deleteBtn);
    list.append(newToDo);
}
