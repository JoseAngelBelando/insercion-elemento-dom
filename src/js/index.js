// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const button = document.querySelector('button');
const ul = document.querySelector('ul');
let itemCount = ul.querySelectorAll('li').length;

button.addEventListener('click', () => {
  itemCount++;
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${itemCount}`;
  ul.appendChild(newItem);
});
