import {booksApi} from './apiBooks'



const mainSectionsBooks = document.querySelector('.bookcase');
// let renderWidth = 375;

// window.addEventListener('resize', resizeWindow);

// function resizeWindow() {
 
 
//   if (
//     window.innerWidth > 767 && renderWidth < 768 ||
//     window.innerWidth > 1439 && renderWidth < 1440 ||
//     window.innerWidth < 1440 && renderWidth > 1439 ||
//     window.innerWidth < 768 && renderWidth > 767
//   ) {
//     location.reload();
//   }
// }

// renderWidth = window.innerWidth;
// let renderedBooks = 1;
// if (renderWidth < 768) {
//   renderedBooks = 1;
// } else if (renderWidth > 767 && renderWidth < 1440) {
//   renderedBooks = 3;
// } else {
//   renderedBooks = 5;
// }

export async function renderAllCategories() {
  
   const titleAllCategoriesMain = `<h1 class='bookcase__title'>
          Best Sellers <span class='bookcase__filter'>Books</span>
        </h1>`;

        const containerBooksList = document.createElement('ul');
        containerBooksList.classList.add('bookshelf__list');
        containerBooksList.classList.add('list');
    await booksApi()
       .then(data => {
         const markap = data.map(({list_name, books}) =>{
          // console.log(list_name, books)
return `<li class='book__card__item'>
<h2 class='bookshelf__title__category'>${list_name}</h2>
<ul class='bookshelf__content book-card__list list'>${books.map(({
   _id,
   book_image_height,
   book_image_width,
   author,
   book_image,
   title,
 }) => {
   return `<li class='book-card__item'>
 <a class='book-card__link' href='#' data-id='${_id}'>
   <div class='book-card__wrapper'>
     <img class='book-card__image' src='${book_image}' alt="Here must be book's name"
     loading="lazy"
     width='${book_image_width}'
     height='${book_image_height}'>
     <div class='book-card__overlay'>
       <p class='book-card__quick-view-text'>quick view</p>
     </div>
   </div>
 </a>
 <div class='book-card__wrap'>
   <h3 class='book__card__name'>${
     title ? title : 'Unknown title'
   }</h3>
   <p class='book__card__author'>${
     author ? author : 'Unknown author'
   }</p>
 </div>
</li>`;
 }
)
.join('')}
</ul>
<button class='book__see__more__btn' type='button' data-see-more data-category-name='${list_name}'>see more</button>
</li>`}).join('')
containerBooksList.innerHTML = markap;
mainSectionsBooks.innerHTML = titleAllCategoriesMain;
mainSectionsBooks.appendChild(containerBooksList)

})
   }
   renderAllCategories()



   function handleScrollToElement(element, position = 'start') {
    element.scrollIntoView({
      behavior: 'smooth',
      position,
    });
  }