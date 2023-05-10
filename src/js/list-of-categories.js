import { getCategories, getBooksByCategory } from '../js/getcategories';
import { booksCategory } from './apiBooks';
import { renderAllCategories } from './section-main-books';

const listOfCategories = document.querySelector('.categories__list');

getCategories().then(response => {
  const sortedCategories = response
    .map(categorie => {
      return `<li class="categories__item" data-category-name='${categorie.list_name}'>${categorie.list_name}</li>`;
    })
    .sort()
    .join('');

  listOfCategories.innerHTML = `
       <li class='categories__item active__category' data-category-name='All categories'>All categories</li>`;
  listOfCategories.insertAdjacentHTML('beforeend', sortedCategories);
  const allItems = document.querySelectorAll('.categories__item');
  allItems.forEach(() => addEventListener('click', onCategoryClick));
});

function onCategoryClick(evt) {
  evt.preventDefault();
  const categoryName = evt.target.dataset.categoryName;

  if (!categoryName) {
    return;
  }

  const activeCategorie = document.querySelector('.active__category');
  activeCategorie.classList.remove('active__category');
  const currentCategory = document.querySelector(
    `[data-category-name="${categoryName}"]`
  );
  currentCategory.classList.add('active__category');

  let mainTitle = document.createElement('h1');
  const categoryBooksList = document.createElement('ul');
  mainTitle.classList.add('bookcase__title');
  mainTitle.innerHTML = normalizeMainTitle(categoryName);
  categoryBooksList.classList.add('bookshelf__list', 'list');

  if (categoryName === 'All categories') {
    renderAllCategories();
    return;
  }

  booksCategory(categoryName).then(data => {
    const mainSectionsBooks = document.querySelector('.bookcase');
    const booksList = data
      .map(
        ({
          book_image,
          book_image_height,
          book_image_width,
          author,
          title,
          buy_links,
          _id,
        }) => {
          return `<li class='book-card__item'>
<a class='book-card__link' href='#' data-id='${_id}'>
<div class='book-card__wrapper'>
<img
class='book-card__image'
src='${book_image}'
alt="Here must be book's name"
width='${book_image_width}'
height = '${book_image_height}'
/>
<div class='book-card__overlay'>
<p class='book-card__quick-view-text'>quick view</p>
</div>
</div>
</a>
<div class='book-card__wrap'>
<h3 class='book-card__name'>${title ? title : 'Unknown title'}</h3>
<p class='book-card__author'>${author ? author : 'Unknown author'}</p>
</div>
</li>`;
        }
      )
      .join('');
    categoryBooksList.innerHTML = booksList;
    mainSectionsBooks.innerHTML = '';
    mainSectionsBooks.appendChild(mainTitle);
    mainSectionsBooks.appendChild(categoryBooksList);
  });
}

function normalizeMainTitle(title) {
  let lastWordCategoryName = title.split(' ');
  if (lastWordCategoryName.length === 1) {
    return lastWordCategoryName;
  }
  lastWordCategoryName = lastWordCategoryName[lastWordCategoryName.length - 1];
  let categoryName = title.split(' ');
  categoryName.pop();
  let innerCategoryName = categoryName.join(' ');
  return `${innerCategoryName} <span class="bookcase__filter">${lastWordCategoryName}</span>`;
}
