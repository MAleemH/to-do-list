import TodoList from './modules/todoList.js';
import Form from './modules/form.js';
import './style.css';

window.onload = () => {
  const myList = new TodoList('ul');

  const myForm = new Form(myList, {
    newTaskInput: 'new_task_input',
    newTaskIcon: 'new_task_icon',
    clearAllCompletedTasks: 'clear_all_completed_tasks',
  });
  myForm();
};