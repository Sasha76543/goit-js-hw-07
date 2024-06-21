const counterValue = document.getElementById('value');
let currentValue = 0;

function increment() {
    currentValue++;
    counterValue.textContent = currentValue;
}

function decrement() {
    currentValue--;
    counterValue.textContent = currentValue;
}

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.dataset.action === 'increment') {
            increment();
        }
        if (event.target.dataset.action === 'decrement') {
            decrement();
        }
    });
});