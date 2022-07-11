const formEl = document.querySelector('.login-form');

function onFromSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
        alert('All fields must be filled in!')
        return;
    }

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
        email,
        password,
    };
    console.log(formData);
    
    event.currentTarget.reset();
}

formEl.addEventListener('submit', onFromSubmit);

