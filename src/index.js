// import javaScript from modules
import toDoList from './modules/list.js';
// call elements
const listContainer = document.querySelector('.list-container');

const toDos = () => {
  toDoList.forEach((item) => {
    listContainer.innerHTML += `
      <li>${item.description}</li>
    `;
  });
};

toDos();