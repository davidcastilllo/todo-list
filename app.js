let arrayOfTodos = []

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  for (let i = 0; i < arrayOfTodos.length; i++) {
    let e = arrayOfTodos[i];
    let li = document.createElement('li');

    let userId = "UserID = " + e.userId + ', ';
    let id = "ID = " + e.id + ', ';
    let title = 'Title = ' + e.title + ', ';
    let completed = "Completed = " + e.id;

    li.append(userId, id, title, completed)

    // if (e.completed == true) { li.className = "green" }
    // else (li.className = "red")

    li.className = e.completed === true ? 'green' : 'red';

    let ol = document.getElementById('todo-list');
    ol.append(li)


  }
}

