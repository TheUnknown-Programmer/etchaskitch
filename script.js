const container = document.getElementById('container')

for (let i = 1; i <= 5; i++) {
  // Create a new div element
  const newDiv = document.createElement('div');

  // Add class and content to the div
  newDiv.className = 'dynamic-div';
  newDiv.textContent = `Div ${i}`;

  // Append the new div to the container
  container.appendChild(newDiv);
}