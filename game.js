const X_CLASS = "cross";
const O_CLASS = "circle";
const COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const board = document.getElementById("board");
const restartButton = document.getElementById("restartButton");
const result = document.getElementById("result");
const resultText = document.getElementById("result-text");
const cells = document.querySelectorAll(".cell");

document.addEventListener("DOMContentLoaded", () => {
  board.classList.add(X_CLASS);
});
board.addEventListener("click", (e) => {
  if (e.target.classList.contains(X_CLASS) || e.target.classList.contains(O_CLASS)) {
    return
  }
  else{
    if ([...board.classList].includes(X_CLASS)) {
      board.classList.remove(X_CLASS);
      board.classList.add(O_CLASS);
      e.target.classList.add(X_CLASS);
      if (checkWin(X_CLASS)) {
        endGame();
      } else if (isDraw()) {
        endGame(true);
      }
    } else {
      board.classList.remove(O_CLASS);
      board.classList.add(X_CLASS);
      e.target.classList.add(O_CLASS);
      if (checkWin(O_CLASS)) {
        endGame();
      } else if (isDraw()) {
        endGame(true);
      }
    }
  }
});

const endGame = (draw) => {
  if (draw) resultText.innerText = "Draw";
  else
    resultText.innerHTML = `${
      [...board.classList].includes(X_CLASS) ? "O" : "X"
    } Winner!`;

  result.classList.add("show");
};

const isDraw = () => {
  return [...cells].every((cell) => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
  });
};

const checkWin = (currentClass) => {
  return COMBINATIONS.some((combiation) => {
    return combiation.every((index) => {
      return cells[index].classList.contains(currentClass);
    });
  });
};


restartButton.addEventListener("click",()=>{
  cells.forEach(cell=>{
    cell.classList.remove(X_CLASS)
    cell.classList.remove(O_CLASS)
  })
  result.classList.remove("show");

})