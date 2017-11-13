/* TIC-TAC-TOE using Node.js

TO RUN:
npm install prompt
(For more information, see github.com/flatiron/prompt)
node tic-tac-toe.js
*/

const prompt = require('prompt');

const board = {
  1: '', 2: '', 3: '',
  4: '', 5: '', 6: '',
  7: '', 8: '', 9: ''
}

let player1 = [];
let player2 = [];

const winningLines = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // horizontal
  [1, 5, 6], [3, 5, 7], // diagonal
  [1, 4, 7], [2, 5, 8], [7, 8, 9] // vertical
];


const makeAMove = (letter, location) => {
  console.log('makeAMove', letter, location)
  board[location] = letter.toUpperCase();
}

const checkForWin = (player) => {
  let trackCheck = 0;
  for (let i = 0; i < winningLines.length; i++) {
    trackCheck = 0;
    for (let j = 0; j < winningLines[i].length; j++) {
      if (board[winningLines[i][j]] === player) {
        trackCheck++;
      }
      if (trackCheck === 3) {
        return true;
      }
    }
  }
  return false;
}

const redrawBoard = () => {
  console.log('\n',
    board[1], ' | ', board[2], ' | ', board[3], '\n' +
    ' _______________\n',
    board[4], ' | ', board[5], ' | ', board[6], '\n' +
    ' _______________\n',
    board[7], ' | ', board[8], ' | ', board[9], '\n');
}


const takeATurn = (player) => {
// get playing input from prompt
// invoke makeAMove and redrawBoard
// switch players and call this function
}
