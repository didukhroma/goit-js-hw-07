// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

//     Категория: Животные
//     Количество элементов: 4
const selectedByClass = document.querySelectorAll('.item');
console.log(`В списке ${selectedByClass.length} категории`);
selectedByClass.forEach(elem => {
  const elemTitle = elem.querySelector('h2');
  const elemSumElements = elem.querySelectorAll('li');
  console.log(`Категория: ${elemTitle.textContent}`);
  console.log(`Количество элементов: ${elemSumElements.length}`);
});
