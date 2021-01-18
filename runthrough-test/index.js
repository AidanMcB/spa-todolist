let button = document.querySelector('.submit-btn');
let inner = document.querySelector('#inner');
button.addEventListener('click', () => {
    console.log("woof")
});
let thingsToDo = [
    "walk the dog",
    "mow the front lawn",
    "redecorate the bookshelves",
    "paint the ceiling to look like the sky in tatooine"
]
let list = document.querySelector('.todo-list')

thingsToDo.map( todoItem => {
    let newToDo = document.createElement("li");
    newToDo.innerText = todoItem;
    list.append(newToDo);
})
