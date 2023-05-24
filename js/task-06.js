

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('input', onInputChange);
inputEl.addEventListener('blur', onInputBlur);
    
    
let inputText = "";
    
function onInputChange(event) {
    inputText = event.currentTarget.value;

    console.log(inputText);
    console.log(inputText.length);
    };



function onInputBlur(event) {
    inputEl.classList.add('invalid');
    
    if (inputText.length === Number.parseInt(inputEl.getAttribute(["data-length"]))) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    };

};

console.log(Number.parseInt(inputEl.getAttribute(["data-length"])));
console.log(inputText.length);