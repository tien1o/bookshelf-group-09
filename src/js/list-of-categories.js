import { getCategories } from '../js/getcategories';

const listOfCategories = document.querySelector('.categories__list');

getCategories().then(response => {
  const sortedCategories = response
    .map(categorie => {
      return `<li class="categories__item">${categorie.list_name}</li>`;
    })
    .sort()
    .join('');
  listOfCategories.insertAdjacentHTML('beforeend', sortedCategories);
  const allItems = document.querySelectorAll('.categories__item');
  allItems.forEach(() => addEventListener('click', onCategoryClick));
});

function onCategoryClick(evt) {
  const activeCategorie = document.querySelector('.active__category');
  activeCategorie.classList.remove('active__category');
  evt.target.classList.add('active__category');

  //             Взаємодія з іншими блоками

  // if (evt.target.innerHTML === "All categories") {
  //   // Рендер розмітки Ігоря
  // } else //Рендер Розмітки Маргарити (передаємо в функцію evt.target.innerHTML(це назва категорії))
}
