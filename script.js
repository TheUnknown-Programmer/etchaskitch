const gridContainer = document.getElementById('grid-container');


function promptForNumber() {
  let userInput;
  do {
    userInput = prompt("Please enter the number of squares per side (max 64):");
    if (userInput === null) {
      alert("You canceled the input.");
      return; 
    }
  } while (isNaN(userInput) || userInput.trim() === "" || userInput < 1 || userInput > 64);

  const gridSize = Number(userInput);
  createGrid(gridSize);
}

function createGrid(size) {
  gridContainer.innerHTML = '';

  
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    gridItem.addEventListener("mouseover", function () {
      this.style.backgroundColor = "red";
    });

    gridContainer.appendChild(gridItem);
  }
}

createGrid(16);