const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

ingredients.forEach(element => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = element;
  listItemEl.classList.add('item');
  listEl.append(listItemEl);
});