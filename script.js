const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');

  gridItem.addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
  });
  
  gridContainer.appendChild(gridItem);
  
}


