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
  const listElementRef = document.createElement('li');
  listElementRef.textContent = elem;
  listElementRef.classList.add('ingredients__element');
  return listElementRef;
});

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...arrNewMarkup);
