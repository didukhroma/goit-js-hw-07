const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов используй document.createElement().
const arrNewMarkup = ingredients.map(elem => {
  const listElement = document.createElement('li');
  listElement.textContent = elem;
  listElement.classList.add('ingredients__element');
  return listElement;
});

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...arrNewMarkup);
