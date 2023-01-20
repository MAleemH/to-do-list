import Task from './modules/crud.js';
import './style.css';

const objTask = new Task();
const inTask = {};

if (localStorage.savedTasks) {
  objTask.tasks = JSON.parse(localStorage.getItem('savedTasks'));
}

const container = document.querySelector('.container');
const ulElement = document.querySelector('.all-todos');
const inputElement = document.querySelector('.form-input');
const btnCom = document.createElement('button');
btnCom.innerHTML = 'Clear all completed';
btnCom.classList.add('btnCom');

inputElement.addEventListener('change', () => {
  inTask.description = inputElement.value;
  inTask.completed = false;
  inTask.index = objTask.tasks.length;
  objTask.addTask(new Task(inTask.description, inTask.completed, inTask.index));
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    inputElement.value = '';
  }
});

btnCom.addEventListener('click', () => {
  const result = objTask.tasks.filter((task) => task.completed === false);
  objTask.tasks = result;
  objTask.populateField();
  ulElement.innerHTML = '';
  container.innerHTML = `
    <div class="title">
      <p>Today's To Do</p><i class="fas fa-sync-alt"></i>
    </div>
    <div class="todo-section">
      <ul class='all-todos'></ul>
    </div>
  `;
  container.append(objTask.showTasks(), btnCom);
});

objTask.showTasks();
container.append(btnCom);