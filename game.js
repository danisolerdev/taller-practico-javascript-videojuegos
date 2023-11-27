const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', setCavasSize);
window.addEventListener('resize', setCavasSize);


let canvasSize;
let elementsSize;

function setCavasSize(){

  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  
  elementsSize = canvasSize / 10;
  startGame();
}

function startGame() {

  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  const map = maps[1];
  const mapRows = map.trim().split('\n');
  const mapRowsCols = mapRows.map(row => row.trim().split(''));

  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      game.fillText(emojis[mapRowsCols[row -1][col -1]],
      elementsSize * col, elementsSize * row);
    }
  }
}