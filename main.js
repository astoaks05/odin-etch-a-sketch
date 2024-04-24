const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

const gridPen = document.querySelector('.grid-item');

const divColor = gridPen.classList.add('grid-pen');
gridPen.addEventListener('mouseenter', divColor);




