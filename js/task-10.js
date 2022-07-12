function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const containerEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls > input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');


function createBoxes(amount) {

  const boxes = [];

  for (let i = 0; i <= amount; i += 1) {
    const box = document.createElement('div');
    console.log(box);
  }

  console.log(boxes);

  containerEl.insertAdjacentHTML('afterbegin', boxes.join(''));
};

createBoxes(3);

function destroyBoxes() {
  containerEl.innerHTML = "";
}