// import './sass/main.scss';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let idInterval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const colorSwitch = () => {
    const body = document.querySelector('body');
    const colorIndex = randomIntegerFromInterval(0, 5);
    body.style.backgroundColor = colors[colorIndex];
};

const buttonStartHandler = event => {
    event.target.disabled = true;
    event.target.nextElementSibling.disabled = false;
    idInterval = setInterval(colorSwitch, 1000);
    event.target.removeEventListener("click", buttonStartHandler);
    event.target.nextElementSibling.addEventListener("click", buttonStoptHandler);
};

const buttonStoptHandler = event => {
    clearInterval(idInterval);
    event.target.disabled = true;
    event.target.removeEventListener("click", buttonStoptHandler);
    event.target.previousElementSibling.disabled = false;
    event.target.previousElementSibling.addEventListener("click", buttonStartHandler);
};

const buttonStart = document.querySelector('button[data-action="start"]');
const buttonStop = document.querySelector('button[data-action="stop"]');

buttonStop.disabled = true;
buttonStart.addEventListener("click", buttonStartHandler);

// console.log(buttonStart);
// console.log(buttonStop);