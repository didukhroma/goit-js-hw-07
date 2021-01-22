// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
const addText = event => {
  const inputWord = event.target.value;
  spanRef.textContent = inputWord.length === 0 ? 'незнакомец' : inputWord;
};
inputRef.addEventListener('input', addText);
