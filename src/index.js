function component() {
  const element = document.createElement('div');
  element.innerHTML = '<p>Hello World!</p>';
  return element;
}

document.body.appendChild(component());