document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const restartButton = document.getElementById("restart");
    const resultScreen = document.getElementById("resultScreen");
    const resultMessage = document.getElementById("resultMessage");
    const newGameButton = document.getElementById("newGameButton");
    const statusDiv = document.getElementById("status");
    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let isGameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const updateStatus = () => {
        statusDiv.textContent = `Player ${currentPlayer}'s turn`;
    };

    const handleResultValidation = () => {
        let roundWon = false;
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            resultMessage.textContent = `Player ${currentPlayer} has won!`;
            resultScreen.style.display = "flex";
            isGameActive = false;
            return;
        }

        if (!board.includes("")) {
            resultMessage.textContent = "Game is a draw!";
            resultScreen.style.display = "flex";
            isGameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateStatus();
    };

    const handleCellClick = (event) => {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

        if (board[clickedCellIndex] !== "" || !isGameActive) {
            return;
        }

        board[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;

        handleResultValidation();
    };

    const handleRestartGame = () => {
        board = ["", "", "", "", "", "", "", "", ""];
        isGameActive = true;
        currentPlayer = "X";
        resultScreen.style.display = "none";
        cells.forEach(cell => cell.textContent = "");
        updateStatus();
    };

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restartButton.addEventListener("click", handleRestartGame);
    newGameButton.addEventListener("click", handleRestartGame);

    updateStatus();
});
