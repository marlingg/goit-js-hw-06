let counterValue = 0;
const valueElement = document.getElementById('value');

function updateCounter() {
    valueElement.textContent = counterValue;
}

document.getElementById('counter').addEventListener('click', (event) => {
    if (event.target.dataset.action === 'decrement') {
        counterValue--;
    } else if (event.target.dataset.action === 'increment') {
        counterValue++;
    }

    updateCounter();
});

updateCounter();