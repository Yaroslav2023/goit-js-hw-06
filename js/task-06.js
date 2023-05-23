

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('input', onInputChange);
inputEl.addEventListener('blur', onInputBlur);
    
    
let inputText = "";
    
function onInputChange(event) {
    inputText = event.currentTarget.value;

    console.log(inputText);
    };

function onInputBlur(event) {
    if (inputText.length = inputEl.dataLength) {
        inputEl.id = "validation-input.valid";
    };
 inputEl.id = "validation-input.invalid";
};
