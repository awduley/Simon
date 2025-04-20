const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

// Returns a random color from the color array below
/*************/
const colorsArray = ["yellow", "blue", "red", "green"];
const randomColorArray = []

function randColor() {
  const randIndex = Math.floor(Math.random() * colorsArray.length);
  randomColorArray.push(colorsArray[randIndex]);
}
/*************/
