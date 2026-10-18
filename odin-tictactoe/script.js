// 1. Select DOM elements
const statusDisplay = document.getElementById("status");
const cells = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restartBtn");

// 2. Define game state
let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

// 3. Define winning conditions
const winningConditions = [
    [0, 1, 2], //Row 1
    [3, 4, 5], //Row 2
    [6, 7, 8], //Row 3
    [0, 3, 6], //Column 1
    [1, 4, 7], //Column 2
    [2, 5, 8], //Column 3
    [0, 4, 8], //Diagonal \
    [2, 4, 6]  //Diagonal /
];

// 4. Handle a player clicking a cell
function handleCellClick(event) {
    const clickedCell = event.target;
    const cellIndex = parseInt(clickedCell.getAttribute("data-index"));

    // Ignore click if the cell already has an X/O or game is over
    if (boardState[cellIndex] !== "" || !isGameActive) {
        return;
    }

    // Update board state & UI
    boardState[cellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Check if this move caused a win or draw
    checkResult();

}

// 5. Evaluate win / draw / switch turns
function checkResult() {
    let roundWon = false;
    
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];

        // Check if positions match and aren't empty
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `Player ${currentPlayer} wins! 🎉`;
        isGameActive = false;
        return;
    }

    // Check for draw
    const isDraw = !boardState.includes("");
    if (isDraw) {
        statusDisplay.textContent = "It's a draw! 🤝";
        isGameActive = false;
        return;
    }

    // Switch player turn
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;

}

// 6. Reset the game
function handleRestart() {
    currentPlayer = "X";
    boardState = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    statusDisplay.textContent = "Player X's turn";
    cells.forEach(cell => {
        cell.textContent = "";
    });

}

// 7. Attach event listeners 
cells.forEach(cell => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener("click", handleRestart);