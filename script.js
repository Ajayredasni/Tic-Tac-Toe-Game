let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let new_btn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let playerO = true;
let winningPatten = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      box.innerText = "O";
      playerO = false;
      checkWinner();
      box.disabled = true;
    } else {
      box.innerText = "X";
      playerO = true;
      checkWinner();
      box.disabled = true;
    }
  });
});

const checkWinner = () => {
  for (let patten of winningPatten) {
    let pos1Val = boxes[patten[0]].innerText;
    let pos2Val = boxes[patten[1]].innerText;
    let pos3Val = boxes[patten[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

const showWinner = (pos1Val) => {
  msgContainer.classList.remove("hide");
  msg.innerText = `🎉🎉🎊🤩🤩🥳🥳 Congratulation  Winner Is  ${pos1Val} 🤩🤩🥳🥳🎊🎉🎉`;
};

new_btn.addEventListener("click", () => {
  msgContainer.classList.add("hide");
  playerO = true;
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
});

reset_btn.addEventListener("click", () => {
  playerO = true;
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
});
