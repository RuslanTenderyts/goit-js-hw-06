const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validatorInput);

function validatorInput(evt) {
    const dataLength = evt.currentTarget.dataset.length;
    const inputLength = evt.currentTarget.value.length;

    evt.currentTarget.classList.remove('invalid', 'valid');

    if((inputLength === Number(dataLength))){
        evt.currentTarget.classList.add('valid');
    } else {
        evt.currentTarget.classList.add('invalid',);
    };
    
    // if(!(inputLength === Number(dataLength))){
    //     evt.currentTarget.classList.add('invalid');
    // } else {
    //     evt.currentTarget.classList.replace('invalid', 'valid');
    // };
}

