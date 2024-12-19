const container = document.querySelector(".container");

const buttons = document.createElement("div");
buttons.className = "buttonsContainer";
container.appendChild(buttons);

const gridContainer = document.createElement("div");
gridContainer.className = "gridContainer";
container.appendChild(gridContainer);

const resetButton = document.createElement("button");
resetButton.innerText = "reset";
resetButton.addEventListener("click", () => {
  const squareDivs = document.querySelectorAll(".square");
  squareDivs.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

buttons.appendChild(resetButton);

const setSizeButton = document.createElement("button");
setSizeButton.innerText = "Set Grid Size";
buttons.appendChild(setSizeButton);

setSizeButton.addEventListener("click", () => {
  const squareDivs = document.querySelectorAll(".square");
  if (squareDivs.length > 0) {
    gridContainer.innerHTML = "";
  }
  let size = prompt("Enter size of square grid *MAX IS 64*:", "16");

  if (size <= 64) {
    for (let index = 0; index < size * size; index++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "lightblue";
      });
      gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
      gridContainer.appendChild(square);
    }
  } else {
    alert("The maximum grid size is 64, Please enter a smaller size");
    return;
  }
});
