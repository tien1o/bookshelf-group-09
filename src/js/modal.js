import { booksId } from './apiBooks';
import amazon from '../images/partners/amazon.png';
import amazon2x from '../images/partners/amazon@2x.png';
import apple from '../images/partners/book.png';
import apple2x from '../images/partners/book@2x.png';
import bookShop from '../images/partners/book-shop.png';
import bookShop2x from '../images/partners/book-shop@2.png';

const LOCAL_KEY = 'booksID';

export async function openModal(element) {
  const bookId = element.dataset.id;
  console.log(bookId);

  const dataBook = await booksId(bookId);
  console.log(dataBook);

  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.remove('is-hidden');

  const modal = document.querySelector('.modal');
  modal.addEventListener('click', event => {
    event.stopPropagation();
  });

  bookInfoMarkup(dataBook);
  setOrderBtnText(modal, dataBook);

  document.body.style.overflow = 'hidden';

  backdrop.addEventListener('click', closeModal);
  window.document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  const closeBtn = document.querySelector('.close-btn ');
  closeBtn.addEventListener('click', closeModal);

  const orderBtn = document.querySelector('.order-btn');
  orderBtn.addEventListener('click', onClick);

  const bookInformation = document.querySelector('.book-information');
  const markup = bookInfoMarkup(dataBook);
  bookInformation.innerHTML = markup;

  function closeModal() {
    backdrop.classList.add('is-hidden');
    bookInformation.innerHTML = '';
    orderBtn.removeEventListener('click', onClick);
    document.body.style.overflow = '';
  }

  function onClick() {
    const textAfterRemoveBtn = document.querySelector('.text-input');
    const value = localStorage.getItem(LOCAL_KEY);
    if (value === null) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify([bookId]));
      orderBtn.textContent = 'remove from the shopping list';
      modal.style.height = '501px';
      textAfterRemoveBtn.innerHTML = `<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`;
    } else {
      const ids = JSON.parse(value);
      const hasBookId = ids.includes(bookId);

      if (hasBookId) {
        const updatedIds = ids.filter(id => id !== bookId);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedIds));
        orderBtn.textContent = 'Add to shopping list';
        //   modal.style.height = '465px';
        textAfterRemoveBtn.innerHTML = '';
      } else {
        ids.push(bookId);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(ids));
        orderBtn.textContent = 'remove from the shopping list';
        // modal.style.height = '501px';
        textAfterRemoveBtn.innerHTML = `<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`;
      }
    }
  }
}

function bookInfoMarkup({ book_image, title, author, description, buy_links }) {
  const amazonUrl = buy_links[0].url;
  const appleUrl = buy_links[1].url;
  const bookShopUrl = buy_links[0].url;

  return `
      <img class='book-img' src="${book_image}" alt='./src/images/without-Image/noImage-Large.png'>
    <div class='book-descr-inf'>
    <p class='book-title'>${title}</p>
    <p class='book-author'>${author}</p>
    <p class='book-description'>${description}</p>
    <ul class='links-group'>
    <li class='links'><a href=${amazonUrl} target="_blank"> <img  src='${amazon}' srcset="${amazon} 1x, ${amazon2x} 2x" alt ='Amazon Icon'></a></li>
    <li class='links'><a href=${appleUrl} target="_blank"> <img  src='${apple}' srcset="${apple} 1x, ${apple2x} 2x" alt ='Apple Icon'></a></li>
    <li class='links'><a href=${bookShopUrl} target="_blank"> <img  src='${bookShop}' srcset="${bookShop} 1x, ${bookShop2x} 2x" alt ='Book Shop Icon'></a></li>
    </ul>
    </div>
       `;
}

function setOrderBtnText(modal, bookId) {
  const orderBtn = document.querySelector('.order-btn');
  const textAfterRemoveBtn = document.querySelector('.text-input');
  const hasLocalStorageID = localStorage.getItem(LOCAL_KEY);
  console.log(hasLocalStorageID);
  console.log(bookId);
  if (hasLocalStorageID === null) {
    orderBtn.textContent = 'Add to shopping list';
    textAfterRemoveBtn.innerHTML = '';
  } else {
    const bookInStorage = JSON.parse(hasLocalStorageID);
    const textOnOrderBtn = bookInStorage.includes(bookId._id);
    if (textOnOrderBtn) {
      console.log(bookId);
      orderBtn.textContent = 'remove from the shopping list';
      // modal.style.height = '501px';
      textAfterRemoveBtn.innerHTML = `<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`;
    } else {
      orderBtn.textContent = 'Add to shopping list';
      // modal.style.height = '465px';
      textAfterRemoveBtn.innerHTML = '';
    }
  }
}
