const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validatorInput);

function validatorInput(evt) {
    const dataLength = evt.currentTarget.dataset.length;
    const inputLength = evt.currentTarget.value.length;

    if(!(inputLength === Number(dataLength))){
        evt.currentTarget.classList.add('invalid');
    } else {
        evt.currentTarget.classList.replace('invalid', 'valid');
    };
}

