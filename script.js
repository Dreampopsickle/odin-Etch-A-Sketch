const container = document.querySelector(".container");
const resetButton = document.querySelector("#resetGrid");

const createGrid = (squaresPerSide) => {
  container.innerHTML = "";

  const containerSize = container.clientWidth;
  const squareSize = containerSize / squaresPerSide;

  for (let i = 1; i < squaresPerSide * squaresPerSide; i++) {
    const div = document.createElement("div");
    div.id = "grid-item";
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });

    container.appendChild(div);
  }

  container.style.gap = `${squareSize * 0.02}px`;
};

const resetGrid = () => {
  let newSize = prompt("Enter the number of squares per side (max 100):", 16);
  if (newSize < 1 || newSize > 100 || isNaN(newSize)) {
    alert("Invalid Input. Please enter a nunber between 1 and 100.");
  } else {
    createGrid(newSize);
  }
};

createGrid(16);

resetButton.addEventListener("click", resetGrid);
