// Сколько символов должно быть в инпуте,
//     указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.
//REF
const inputRef = document.querySelector('#validation-input');
const validInputLengthRef = inputRef.dataset.length;
// CALLBACK
const handlInputBlur = event => {
  const inputTextLength = event.target.value.length;
  const containClassInvalid = inputRef.classList.contains('invalid');
  const containClassValid = inputRef.classList.contains('valid');
  const addClassInvalid = () => inputRef.classList.add('invalid');
  const addClassValid = () => inputRef.classList.add('valid');
  const removeClassInvalid = () => inputRef.classList.remove('invalid');
  const removeClassValid = () => inputRef.classList.remove('valid');

  if (inputTextLength > validInputLengthRef) addClassInvalid();
  if (inputTextLength < validInputLengthRef && inputTextLength > 0)
    addClassValid();
  if (inputTextLength === 0) {
    if (containClassInvalid) removeClassInvalid();
    if (containClassValid) removeClassValid();
  }
};
// EVENT LISTENER
inputRef.addEventListener('blur', handlInputBlur);
