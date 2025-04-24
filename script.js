const startGameOrStopGame = document.querySelector('.start-game');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

const gameStart = "Start Simon?";
const gameStop = "Stop Simon?";

startGameOrStopGame.textContent = gameStart;
let isStarted = false;

const colorsArray = ["yellow", "blue", "red", "green"];
const randomColorArray = []

// Returns a random color from the color above below
/*************/
function chooseRandColor() {
  const randIndex = Math.floor(Math.random() * colorsArray.length);
  randomColorArray.push(colorsArray[randIndex]);
}
/*************/

chooseRandColor();
chooseRandColor();
chooseRandColor();
chooseRandColor();

function lightSequence() {
  randomColorArray.forEach((color) => {
    
      if(color === 'yellow') {
        let intervalId = setInterval(() => {
          yellow.classList.add(`${color}-light`);
        }, 500);
        yellow.classList.remove(`${color}-light`);
        clearInterval(intervalId);
      }
      if(color === 'blue') {
        let intervalId = setInterval(() => {
          blue.classList.add(`${color}-light`);
        }, 500);
        blue.classList.remove(`${color}-light`);
        clearInterval(intervalId);
      }
      if(color === 'red') {
        let intervalId = setInterval(() => {
          red.classList.add(`${color}-light`);
        }, 500);
        red.classList.remove(`${color}-light`);
        clearInterval(intervalId);
      }
      if(color === 'green') {
        let intervalId = setInterval(() => {
          green.classList.add(`${color}-light`);
        }, 500);
        green.classList.remove(`${color}-light`);
        clearInterval(intervalId);
      }
    
    
  });
}

start.addEventListener('click', () => {
  isStarted = true;
  startGameOrStopGame.textContent = gameStop;
  lightSequence();
});

stop.addEventListener('click', () => {
  isStarted = false;
  startGameOrStopGame.textContent = gameStart;
});


// function lightPattern() {
//   colorsArray.forEach((color) => {
//     if(color === 'yellow') {
//       yellow.classList.add('yellow-light')
//     }
//     if(color === 'blue') {
//       blue.classList.add('blue-light')
//     }
//     if(color === 'red') {
//       red.classList.add('red-light')
//     }
//     if(color === 'green') {
//       green.classList.add('green-light')
//     }
//   });
// }