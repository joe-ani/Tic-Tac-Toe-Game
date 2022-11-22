//To represent the X or the O position on the game-board
let O_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let X_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cell = document.querySelectorAll(".cell");
const winner = document.querySelector(".h2");
const restartGame = document.querySelector(".restart-button");
const winScreen = document.querySelector(".win-screen");
const setInitial = Math.floor(Math.random() * 2);
const boardArray = [];
let isElem;
let newCell;
let cellAttr;
let cellAttrIndex;
let X_LEN;
let O_LEN;
let removeEvent;

restartGame.addEventListener("click", () => {
  winScreen.setAttribute("data-win", false);
  O_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  X_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  removeEvent = true;
  cell.forEach((item) => {
    item.classList.remove("X");
    item.classList.remove("O");
    item.setAttribute("data-game", "");
  });
});

const checkGame = () => {
  boardArray.forEach((item, index) => {
    cellAttr = item.getAttribute("data-game");
    cellAttrIndex = index;
    if (cellAttr === "X") {
      for (let i = 0; i <= X_LIST.length; i++) {
        X_LIST[cellAttrIndex] = cellAttr;
      }
    } else if (cellAttr === "O") {
      for (let i = 0; i <= O_LIST.length; i++) {
        O_LIST[cellAttrIndex] = cellAttr;
      }
    }
  });

  (() => {
    // Loop through the array O or X
    let O_OCC = [];
    let X_OCC = [];
    for (let i = 0; i <= O_LIST.length; i++) {
      O_LIST[i] === "O" ? O_OCC.push(O_LIST[i]) : "";
      if (O_OCC.length === O_LEN) {
        winScreen.setAttribute("data-win", true);
        winner.innerText = "IT'S A TIE";
        winner.style.color = "black";
      }
    }
    for (let i = 0; i <= X_LIST.length; i++) {
      X_LIST[i] === "X" ? X_OCC.push(X_LIST[i]) : "";
      if (X_OCC.length === X_LEN) {
        winScreen.setAttribute("data-win", true);
        winner.innerText = "IT'S A TIE";
        winner.style.color = "black";
      }
    }
  })();
  //immediately invoked Anonymous Function
  (() => {
    if (
      (O_LIST[0] === "O" && O_LIST[3] === "O" && O_LIST[6] === "O") ||
      (O_LIST[1] === "O" && O_LIST[4] === "O" && O_LIST[7] === "O") ||
      (O_LIST[2] === "O" && O_LIST[5] === "O" && O_LIST[8] === "O") ||
      (O_LIST[0] === "O" && O_LIST[4] === "O" && O_LIST[8] === "O") ||
      (O_LIST[2] === "O" && O_LIST[4] === "O" && O_LIST[6] === "O") ||
      (O_LIST[0] === "O" && O_LIST[1] === "O" && O_LIST[2] === "O") ||
      (O_LIST[3] === "O" && O_LIST[4] === "O" && O_LIST[5] === "O") ||
      (O_LIST[6] === "O" && O_LIST[7] === "O" && O_LIST[8] === "O")
    ) {
      winScreen.setAttribute("data-win", true);
      winner.innerText = "O WIN'S";
      winner.style.color = "rgb(25, 67, 135)";
    } else if (
      (X_LIST[0] === "X" && X_LIST[3] === "X" && X_LIST[6] === "X") ||
      (X_LIST[1] === "X" && X_LIST[4] === "X" && X_LIST[7] === "X") ||
      (X_LIST[2] === "X" && X_LIST[5] === "X" && X_LIST[8] === "X") ||
      (X_LIST[0] === "X" && X_LIST[4] === "X" && X_LIST[8] === "X") ||
      (X_LIST[2] === "X" && X_LIST[4] === "X" && X_LIST[6] === "X") ||
      (X_LIST[0] === "X" && X_LIST[1] === "X" && X_LIST[2] === "X") ||
      (X_LIST[3] === "X" && X_LIST[4] === "X" && X_LIST[5] === "X") ||
      (X_LIST[6] === "X" && X_LIST[7] === "X" && X_LIST[8] === "X")
    ) {
      winScreen.setAttribute("data-win", true);
      winner.innerText = "X WIN'S";
      winner.style.color = "rgba(9, 206, 157, 0.722)";
    }
  })();
};

if (setInitial == 0) {
  isElem = true;
} else if (setInitial == 1) {
  isElem = false;
}

// * adds's X or O to a cell

const runClick = (cellI) => {
  newCell = cellI;
  cellI.addEventListener(
    "click",
    () => {
      if (isElem) {
        const valid = cellI.getAttribute("data-game");
        if (valid === "") {
          cellI.classList.add("X");
          cellI.setAttribute("data-game", "X");
        } else return;
        isElem = false;
        X_LEN = 5;
        O_LEN = 5;
      } else {

        const valid = cellI.getAttribute("data-game");
        if (valid === "") {
          cellI.classList.add("O");
          cellI.setAttribute("data-game", "O");
        } else return;
        isElem = true;
        cellI.classList.remove("X");
        cellI.classList.add("O");
        cellI.setAttribute("data-game", "O");
        X_LEN = 5;
        O_LEN = 5;
      }
      checkGame();
    }
  );
};
cell.forEach(runClick);
cell.forEach((index) => boardArray.push(index));
