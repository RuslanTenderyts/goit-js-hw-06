const inputNameEL = document.querySelector('input#name-input');
const outputNameEL = document.querySelector('span#name-output');

inputNameEL.addEventListener('input', onInputChange); 

function onInputChange(evt) {
    if(evt.currentTarget.value) {
        outputNameEL.textContent = evt.currentTarget.value;
    }else {
        outputNameEL.textContent = 'Anonymous';
    };
};

