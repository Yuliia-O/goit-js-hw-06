let counterValue = 0;

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

function decrementCounter() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

function incrementCounter() {
    counterValue += 1;
    counterEl.textContent = counterValue;
}

decrementBtnEl.addEventListener('click', decrementCounter);
incrementBtnEl.addEventListener('click', incrementCounter);