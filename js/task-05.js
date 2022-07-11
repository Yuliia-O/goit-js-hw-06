const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        spanEl.textContent = event.currentTarget.value;
    } else {
        spanEl.textContent = 'Anonymous';
    }
}
//чомусь якщо в інпуті щось написати і потім стерти, 
//то в спані залишається перша буква з того стертого.як фіксити хз
//пофіксила елсом але не подобається

inputEl.addEventListener('input', onInputChange);