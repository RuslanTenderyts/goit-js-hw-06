const inputEl = document.querySelector('#font-size-control');
const spanTex = document.querySelector('#text');

inputEl.addEventListener('input', changeFontSize);

function changeFontSize(evt) {
    spanTex.style.fontSize = `${evt.currentTarget.value}px`;
};