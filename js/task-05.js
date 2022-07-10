const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        spanEl.textContent = event.currentTarget.value;
    }
}
//чомусь якщо інпут пустий залишається одна буква в спані. як фіксити хз

inputEl.addEventListener('input', onInputChange);