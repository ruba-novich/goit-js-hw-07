
const incrementBtn = document.querySelector('[data-action="increment"]'); 
const decrementBtn = document.querySelector('[data-action="decrement"]');
const outRef = document.querySelector('#value');

let counterValue  = Number(outRef.textContent);

const increment = () => (
    outRef.textContent = counterValue += 1
);

const decrement = () => (
    outRef.textContent = counterValue -= 1    
);

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

