// import css
import './style.css';
// import javaScript from modules
import toDoList from './modules/list.js';
// call elements
const listContainer = document.querySelector('.list-container');

const toDos = () => {
  toDoList.forEach((item) => {
    listContainer.innerHTML += `
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="${item.index}">
        <label class="form-check-label">
            ${item.description}
        </label>
    </div>
    <hr>
    `;
  });
};

toDos();