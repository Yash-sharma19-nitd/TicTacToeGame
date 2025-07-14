// HTML Element references
const dialog = document.getElementById('dialog');
const player1name = document.getElementById('player1');
const player2name = document.getElementById('player2');
const board = document.getElementById('gameboard');
const resultDisplay = document.getElementById('result');
const startBtn = document.getElementById('start');
const winsound= new Audio('win.mp3');
const resetSound = new Audio('reset.wav');
resetSound.volume = 0.5; // Set volume for reset sound
winsound.volume = 0.7; // Set volume for win sound
const resetBtn = document.getElementById('reset');

// Game state
let gameboard = [];
let player1 = '';
let player2 = '';
let turn = 0; // 0 = player1, 1 = player2
let gameActive = false;

// Generate empty 3x3 board
function generateGameboard() {
    gameboard = [];
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(0);
        }
        gameboard.push(row);
    }
}

// Check for win
function checkWin(symbol) {
    // Rows & Columns
    for (let i = 0; i < 3; i++) {
        if (
            gameboard[i][0] === symbol &&
            gameboard[i][1] === symbol &&
            gameboard[i][2] === symbol
        ) return true;
        if (
            gameboard[0][i] === symbol &&
            gameboard[1][i] === symbol &&
            gameboard[2][i] === symbol
        ) return true;
    }

    // Diagonals
    if (
        gameboard[0][0] === symbol &&
        gameboard[1][1] === symbol &&
        gameboard[2][2] === symbol
    ) return true;

    if (
        gameboard[0][2] === symbol &&
        gameboard[1][1] === symbol &&
        gameboard[2][0] === symbol
    ) return true;

    return false;
}

// Check if board is full
function isDraw() {
    return gameboard.flat().every(cell => cell !== 0);
}

// Handle a player's move
function handleMove(e) {
    if (!gameActive) return;
    if (e.target.tagName !== 'P') return;

    const id = e.target.id;
    if (!id) return;

    const [i, j] = JSON.parse(id);
    if (gameboard[i][j] !== 0) return; // already filled

    const symbol = turn === 0 ? 'O' : 'X';
    gameboard[i][j] = symbol;
    e.target.textContent = symbol;

    if (checkWin(symbol)) {
        winsound.play();
        resultDisplay.textContent = (turn === 0 ? player1 : player2) + ' wins!';
        gameActive = false;
        return;
    }

    if (isDraw()) {
        resultDisplay.textContent = 'It\'s a draw!';
        gameActive = false;
        return;
    }

    // Switch turn
    turn = 1 - turn;
    resultDisplay.textContent = (turn === 0 ? `${player1}'s` : `${player2}'s`) + ' turn';
}

// Start the game
startBtn.addEventListener('click', function (e) {
    e.preventDefault();
    dialog.showModal();

    player1 = player1name.value.trim() || 'Player 1';
    player2 = player2name.value.trim() || 'Player 2';

    document.getElementById('player1Name').innerText = player1;
    document.getElementById('player2Name').innerText = player2;

    generateGameboard();
    turn = 0;
    gameActive = true;
    resultDisplay.textContent = `${player1}'s turn`;

    // Clear board UI
    board.querySelectorAll('p').forEach(p => {
        p.textContent = '';
    });
});

// Reset button
resetBtn.addEventListener('click', function () {
    resetSound.play();
    generateGameboard();
    gameActive = true;
    turn = 0;
    resultDisplay.textContent = `${player1}'s turn`;
    board.querySelectorAll('p').forEach(p => {
        p.textContent = '';
    });
});

// Only one event listener on board
board.addEventListener('click', handleMove);
