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
    gridContainer.innerHTML = ""
  }
  let dimensions = prompt("Enter width x height *MAX IS 64x64*:", "16x16");
  let [width, height] = dimensions.split("x").map(Number);
  if (width <= 64 && height <= 64) {
    for (let index = 0; index < width * height; index++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "lightblue";
      });
      gridContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
      gridContainer.style.gridTemplateRows = `repeat(${height}, 1fr)`;
      gridContainer.appendChild(square);
    }
  } else {
    alert("The maximum grid size is 64x64, Please enter a smaller size");
    return;
  }
});
