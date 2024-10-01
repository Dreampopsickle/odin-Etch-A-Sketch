let container = document.querySelector("#container");
const createSquares = () => {
  for (let i = 1; i <= 16; i++) {
    let element = document.createElement("div"); // creates the setup for a div
    element.className = "box";
    element.innerHTML = `${i}`;
    container.appendChild(element); // applies setup to html
  }

  console.log(container);
};

const createGrid = () => {
  for (let j = 1; j <= 16; j++) {
    createSquares();
  }
};

createGrid();
