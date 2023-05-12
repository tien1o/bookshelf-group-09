import { booksId } from './apiBooks';
import emptybooks from '../images/shopping-list/empty.png';
import emptybooks2x from '../images/shopping-list/empty@2x.png';
import amazon from '../images/partners/amazon.png';
import amazon2x from '../images/partners/amazon@2x.png';
import apple from '../images/partners/book.png';
import apple2x from '../images/partners/book@2x.png';
import bookShop from '../images/partners/book-shop.png';
import bookShop2x from '../images/partners/book-shop@2.png';
import icons from '../images/icons.svg';
const LOCAL_KEY = 'booksID';
async function ShoppingListPageMarkup() {
  const shoppingListPageView = document.querySelector(
    '.shopping-list-page-view'
  );
  const value = localStorage.getItem(LOCAL_KEY);
  const idsFromLocalStorage = JSON.parse(value);
  if (value === null || idsFromLocalStorage.length === 0) {
    const markup = `<div class="shoplist-list-background">
        <p class="shoplist-background-text">
        This page is empty, add some books and proceed to order.</p>
        <img src='${emptybooks}' srcset="${emptybooks} 1x, ${emptybooks2x} 2x" alt ='Empty books'> </div>`;
    shoppingListPageView.insertAdjacentHTML('beforeend', markup);
  } else {
    console.log(idsFromLocalStorage);
    let page = 1;
    let pageSize = 3;
    const numberOfPages = Math.ceil(idsFromLocalStorage.length / 3);
    console.log(numberOfPages);
    renderPagination(numberOfPages);
    renderBookItems(idsFromLocalStorage, page);
    function renderPagination(numberOfPages) {
      if (numberOfPages === 1) {
        return;
      } else {
        const paginationBtn = document.querySelector('.pagination-btn');
        let pagination = '';
        for (let i = 1; i <= numberOfPages; i++) {
          const pageBtn = `<button type='button' class='page-btn' data-page=${i} on-click="activeBtn()"> ${i} </button>`;
          pagination = pagination.concat(pageBtn);
        }
        const markupBtn = `
                <button type='button' class='prev-btn'> < </button>
                ${pagination}
                <button type='button' class='next-btn'> > </button>
                `;
        paginationBtn.innerHTML = markupBtn;
        changeActivePage(paginationBtn, page);
        paginationBtn
          .querySelector('.prev-btn')
          .addEventListener('click', () => {
            if (page !== 1) {
              const currentPage = page - 1;
              changeActivePage(paginationBtn, currentPage);
              page = currentPage;
              renderBookItems(idsFromLocalStorage, currentPage);
            }
          });
        paginationBtn
          .querySelector('.next-btn')
          .addEventListener('click', () => {
            if (page !== numberOfPages) {
              const currentPage = page + 1;
              changeActivePage(paginationBtn, currentPage);
              page = currentPage;
              renderBookItems(idsFromLocalStorage, currentPage);
            }
          });
        paginationBtn.querySelectorAll('.page-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const currentPage = Number(btn.dataset.page);
            changeActivePage(paginationBtn, currentPage);
            page = currentPage;
            renderBookItems(idsFromLocalStorage, currentPage);
          });
        });
      }
    }
    function renderBookItems(idsFromLocalStorage, page, btn) {
      shoppingListPageView.innerHTML = '';
      const end = page * pageSize;
      const start = end - pageSize;
      const onePage = idsFromLocalStorage.slice(start, end);
      console.log(onePage);
      const shoppongListBooks = onePage.forEach(async id => {
        const books = await booksId(id);
        console.log(books);
        const markup = bookInfoMarkup(books);
        shoppingListPageView.insertAdjacentHTML('beforeend', markup);
        addDeleteHandler(id);
      });
      function bookInfoMarkup({
        _id,
        book_image,
        title,
        author,
        description,
        buy_links,
      }) {
        const amazonUrl = buy_links[0].url;
        const appleUrl = buy_links[1].url;
        const bookShopUrl = buy_links[0].url;
        return `
            <div class="shoplist-item">
                <div class="book-container">
                    <div class="book-img-container">
                         <img class='book-img' src="${
                           book_image
                             ? book_image
                             : './src/images/without-Image/noImage-Large.png'
                         }" alt='Book image'>
            </div>
        <div class='book-descr-inf'>
        <p class='book-title'>${title ? title : 'No title.'}</p>
        <p class='book-author'>${author ? author : 'No author.'}</p>
        <p class='book-description-shoplist'>${
          description ? description : 'No description.'
        }</p>
                </div>
        <div class='links-group'>
        <a href=${amazonUrl} class='book-links-shoplist' target="_blank"> <img  src='${amazon}' srcset="${amazon} 1x, ${amazon2x} 2x" alt ='Amazon Icon'></a>
        <a href=${appleUrl} class='book-links-shoplist' target="_blank"> <img  src='${apple}' srcset="${apple} 1x, ${apple2x} 2x" alt ='Apple Icon'></a>
        <a href=${bookShopUrl} class='book-links-shoplist' target="_blank"> <img  src='${bookShop}' srcset="${bookShop} 1x, ${bookShop2x} 2x" alt ='Book Shop Icon'></a>
        </div>
        <button class='deliteBookFromShopList 'data-name='${_id}' type='button'>
        <svg class="trash-btn__icon" width="28" height="28">
        <use href="${icons}#delete-book"></use>
      </svg>
       </button>
        </div>
        </div>
       `;
      }
    }
    function addDeleteHandler(id) {
      const deleteBtn = document.querySelector(`[data-name="${id}"]`);
      deleteBtn.addEventListener('click', () => deliteBookFromShopingList(id));
    }
    function deliteBookFromShopingList(bookIdForDelite) {
      console.log('this', bookIdForDelite);
      const idsInLocalStarage = JSON.parse(localStorage.getItem(LOCAL_KEY));
      console.log(idsInLocalStarage);
      const deliteID = idsInLocalStarage.filter(id => id !== bookIdForDelite);
      console.log('array', deliteID);
      const newLocalStorage = localStorage.setItem(
        LOCAL_KEY,
        JSON.stringify(deliteID)
      );
      location.reload();
    }
    function changeActivePage(paginationBtn, currentPage) {
      const activePageBtn = paginationBtn.querySelector('.page-btn-active');
      if (activePageBtn) {
        activePageBtn.classList.remove('page-btn-active');
      }
      paginationBtn
        .querySelector(`[data-page="${currentPage}"]`)
        .classList.add('page-btn-active');
    }
  }
}
ShoppingListPageMarkup();
