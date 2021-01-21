const inputRef = document.querySelector('#font-size-control');
inputRef.setAttribute('min', '10');
inputRef.setAttribute('max', '30');
inputRef.setAttribute('step', '1');
inputRef.setAttribute('value', '20');
const spanTextRef = document.querySelector('#text');
// spanTextRef.style.fontSize = inputRef.value + 'px';
spanTextRef.style.fontSize = '20px';
inputRef.addEventListener('input', event => {
  spanTextRef.style.fontSize = inputRef.value + 'px';
});
