const todo = document.getElementById("todo");

// console.log(todo.value);

const form = document.getElementById("addForm");

const todosList = document.getElementById("todos");

form.addEventListener("submit", addToDo);

todosList.addEventListener('click',removetodo);

function addToDo(event) {
  event.preventDefault();
  if (todo.value == "") {
    alert("Please provide a value");
    return;
  }
  // get the user input
  const newTodo = todo.value;
  // create a new li element

  let li = document.createElement("li");

  li.className = "list-group-item d-flex justify-content-between";
  //add a new todo to the li element
  li.innerText = newTodo;

  const filter = document.getElementById("filter");


  //create delete button
  let deleteButton = document.createElement('button');

  deleteButton.className = 'btn btn-danger btn-sm delete'; 


  deleteButton.innerText = 'delete';
  //add same classes 
  // add a new todo   element
  li.append(deleteButton);

  todosList.appendChild(li);

  // append li to add todo element
  todo.value = "";
}
//search a todo

filter.addEventListener('keyup', filtertodos);

function filtertodos(e) {
   let searchText = e.target.value.toLowerCase();

   let listItems = document.getElementsByTagName('li');

   Array.from(listItems).forEach(function(item) {
    let todoName = item.firstChild.textContent
    if (todoName.toLowerCase().indexOf(searchText)!=-1) {
        console.log('block');
        item.style.display = 'flex';
    }
    else{
        console.log('none');
        item.classList.remove('d-flex');
        item.style.display = 'none';
    }
   });
}

//    console.log(searchText);


//add a todo


//remove a todo

function removetodo(e) {
    if(e.target.classList.contains('delete'))
    {
        let result = confirm("Are you sure you want to delete this todo?");
        if(result)
        {
            let li = e.target.parentElement;
            todosList.removeChild(li);
        }
    }
}
