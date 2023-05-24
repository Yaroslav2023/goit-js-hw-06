function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl =document.querySelector('body');
const btnChangeColour = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');



const changeColour = () => {
  spanEl.textContent = bodyEl.style.backgroundColor = getRandomHexColor();
  
    
}


btnChangeColour.addEventListener('click', changeColour);