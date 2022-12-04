const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const makeListIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const elLi = document.createElement('li');
      elLi.textContent = ingredient;
      elLi.classList.add('item');
      
      return elLi;
  });
};

const elItem = makeListIngredients(ingredients);
const elIngredients	= document.querySelector('#ingredients')
elIngredients.append(...elItem);

console.log(elIngredients);

//Розвязок через map замість for
// const elItem = ingredients.map(ingredient => {
//   const elLi = document.createElement('li');
//     elLi.textContent = ingredient;
//     elLi.classList.add('item');
    
//     return elLi;
// });

// const elIngredients	= document.querySelector('#ingredients')
// elIngredients.append(...elItem);

// console.log(elIngredients);

// Варіант через for
// const elItem = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//     elItem.push(document.createElement('li'));
//     elItem[i].textContent = ingredients[i];
//     elItem[i].classList.add('item');
//   }

// console.log(elItem)

// const elIngredients	= document.querySelector('#ingredients')
// elIngredients.append(...elItem);

// console.log(elIngredients);