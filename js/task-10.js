function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const countBoxEl = document.querySelector("#controls input");
const btnCreateEl = document.querySelector("#controls [data-create]");
const btnDestroyEl = document.querySelector("#controls [data-destroy]");
const boxesEl = document.querySelector('#boxes');


btnCreateEl.addEventListener('click', onCreateCountBoxes);
btnDestroyEl.addEventListener('click', onDestroyBoxes);


function onCreateCountBoxes() {
  const count = Number(countBoxEl.value);
  createBoxes(count);
};
function createBoxes(amount) {
  const divEl = [];
    
  for (let i = 0, j = 30; i < amount; i += 1, j += 10) {
    divEl.push(document.createElement('div'));
    
    divEl[i].style.width = `${j}px`;
    divEl[i].style.height = `${j}px`;
    divEl[i].style.backgroundColor = getRandomHexColor();
  
  };
  boxesEl.append(...divEl);
  console.dir(boxesEl);
};

function onDestroyBoxes() {
  boxesEl.innerHTML = '';
  console.dir(boxesEl);
};
