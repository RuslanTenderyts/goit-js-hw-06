const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    const formElements = evt.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if(!mail || !password){
        alert('Потрібно заповнити всі поля')
    } else {
        const objValueForm = {
            mail,
            password
        }
        console.log(objValueForm);
        evt.currentTarget.reset();
    }

}


