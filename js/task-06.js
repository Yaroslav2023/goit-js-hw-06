

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
    
    if ( inputText.length === Number.parseInt(inputEl.getAttribute(["data-length"])) ) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } 
    if ( inputText.length !== Number.parseInt(inputEl.getAttribute(["data-length"])) ) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } 

    if ( inputText.length === 0 )  {
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    };

};