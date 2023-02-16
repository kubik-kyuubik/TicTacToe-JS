let cells = document.querySelectorAll('.cell');
let restartBtn = document.querySelector('.restartBtn');

let currentPlayer = 'X';
let gameOver = false;

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function checkWinner() {
    winningCombinations.forEach(combination => {
        let check = combination.every(index => cells[index].innerText.trim() == currentPlayer);
        if(check) {
            gameOver = true;
            highlightCells(combination);
            alert(currentPlayer + ' has won!');
        }
    });
}

function highlightCells(combination) {
    combination.forEach(index => {
        cells[index].classList.add('highlight');
    });
}

function restart() {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = 'initial';        
    });
    currentPlayer = 'X';
    gameOver = false;
}

restartBtn.addEventListener('click', restart);

cells.forEach((cell) => {
    cell.addEventListener('click', () => {        
        if(cell.innerText.trim() != '' || gameOver) return;
        cell.innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    })
});