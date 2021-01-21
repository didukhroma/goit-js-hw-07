const inputRef = document.querySelector('#controls > input');
const createBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const divBoxesRef = document.querySelector('#boxes');
//------------------
const randomRGBColor = () => Math.floor(Math.random() * Math.floor(255));

//--------------------------------
const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    divBoxesRef.insertAdjacentHTML(
      'beforeend',
      `<div  style="
      width:${30 + i * 10}px; 
      height:${30 + i * 10}px ;
      background-color: rgb(${randomRGBColor()},${randomRGBColor()},${randomRGBColor()})"></div>`,
    );
  }
};
const amount = createBtnRef.addEventListener('click', event =>
  createBoxes(inputRef.valueAsNumber),
);

destroyBtnRef.addEventListener('click', () => {
  divBoxesRef.querySelectorAll('div').forEach(elem => elem.remove());
});
