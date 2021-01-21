// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValue = document.querySelector('#value');
const increaseBtn = document.querySelector('button[data-action="increment"]');
const reduceBtn = document.querySelector('button[data-action = "decrement"]');
const increment = () => {
  counterValue.textContent = +counterValue.textContent + 1;
};
const decrement = () => {
  counterValue.textContent = +counterValue.textContent - 1;
};
const increaseCount = increaseBtn.addEventListener('click', increment);
const reduceCount = reduceBtn.addEventListener('click', decrement);
