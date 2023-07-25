const controlsDiv = document.getElementById('controls');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

createButton.addEventListener('click', () => {
    const amount = Number(controlsDiv.querySelector('input').value);

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.margin = '5px';
        boxesDiv.appendChild(box);
    }
});

destroyButton.addEventListener('click', () => {
    boxesDiv.innerHTML = '';
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}