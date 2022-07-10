const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        spanEl.textContent = event.currentTarget.value;
    } else {
        spanEl.textContent = 'Anonymous';
    }
}
//чомусь якщо інпут пустий залишається одна буква в спані. як фіксити хз
// пофіксила елсом але не подобається

inputEl.addEventListener('input', onInputChange);