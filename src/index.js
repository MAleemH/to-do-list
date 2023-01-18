import './style.css';

const component = () => {
  const element = document.createElement('div');
  element.innerHTML = '<p>To Do List</p>';
  element.classList.add('todo');
  return element;
};

document.body.appendChild(component());