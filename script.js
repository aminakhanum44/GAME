let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(index) {
    if (gameActive && !board[index]) {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        if (checkWin()) {
            document.getElementById('result').innerText = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.indexOf('') === -1) {
            document.getElementById('result').innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            return true;
        }
    }

    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('result').innerText = '';
    for (const cell of document.getElementById('board').children) {
        cell.innerText = '';
    }
}

resetBoard();
