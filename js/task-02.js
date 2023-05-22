const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");


const listitems = ingredients.map((el) => {

  const listItemEl = document.createElement('li');

  listItemEl.classList.add("item")

  listItemEl.textContent += el;
  
  return listItemEl;

});

console.log(listitems);

ingredientsEl.append(...listitems);

