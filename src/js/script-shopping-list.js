import { booksId } from './apiBooks';
import amazon from '../images/partners/amazon.png';
import amazon2x from '../images/partners/amazon@2x.png';
import apple from '../images/partners/book.png';
import apple2x from '../images/partners/book@2x.png';
import bookShop from '../images/partners/book-shop.png';
import bookShop2x from '../images/partners/book-shop@2.png';


let booksId = [];

let booksPerPage = [];
let currentPage = 1;
let firstCardIndex = (currentPage - 1) * 3;
let lastCardIndex = (currentPage - 1) * 3 + 3;

localStorage.getItem('booksID') === null ? noBooksMarkup() : checkLocalBooks();

function checkLocalBooks() {
  let booksFromLocal = localStorage.getItem('booksID');
  let localBooks = JSON.parse(booksFromLocal);

  if (localBooks.length > 0) {
    localBooks.forEach(book => {
      booksId.push(book);
    });

    booksPerPage = booksId.slice(firstCardIndex, lastCardIndex);
    renderCurrentPage(booksPerPage);
  } else {
    noBooksMarkup();
  }
 
}

