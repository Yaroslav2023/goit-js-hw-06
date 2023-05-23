const counterValueEl = document.querySelector("#value");

let counterValue = 0;

const addListenerBtnDecr = document.querySelector('[data-action="decrement"]');

addListenerBtnDecr.addEventListener('click', () => {
    counterValue -= 1;

    counterValueEl.textContent = counterValue;
});

const addListenerBtnIncr = document.querySelector('[data-action="increment"]');

addListenerBtnIncr.addEventListener('click', () => {
    counterValue += 1;

    counterValueEl.textContent = counterValue;
});