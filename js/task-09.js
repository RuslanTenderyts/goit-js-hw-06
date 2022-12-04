function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const colorValue = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');


changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  bodyEl.style.backgroundColor = colorValue.textContent = getRandomHexColor();
};