function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

function onBtnClick(event) {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
}

btnEl.addEventListener('click', onBtnClick);