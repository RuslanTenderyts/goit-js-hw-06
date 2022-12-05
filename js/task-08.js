const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    const formElements = evt.currentTarget.elements;
    const mail = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    if(!mail || !password){
      return  alert('Потрібно заповнити всі поля')
    }; 
    
    const objValueForm = {
        mail,
        password,
    };
    console.log(objValueForm);
    evt.currentTarget.reset();
    

}


