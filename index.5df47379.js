!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.5df47379.js","dTkHT":"amazon.06fa7713.png","hyzQv":"amazon@2x.4eae58f9.png","fnrpS":"book.57ecc8dc.png","bS23T":"book@2x.c5385d25.png","dGKkA":"book-shop.e5effbae.png","6mEwM":"book-shop@2.3b8922c8.png","9rLGk":"noImage-Medium.53d4ac22.png","etMPu":"shopping-list.9240bb3e.css","5EZLZ":"shopping-list.ef300971.js","01IoP":"shopping-list.6932e8a6.js"}')),a("6fhvM");var r,c=a("bpxeT"),s=a("2TvXO"),i=a("6fhvM");c=a("bpxeT"),s=a("2TvXO"),i=a("6fhvM");r=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("dTkHT");var l;l=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("hyzQv");var d;d=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("fnrpS");var u;u=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("bS23T");var _;_=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("dGKkA");var p;p=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("6mEwM");var b="booksID";function m(e){return v.apply(this,arguments)}function v(){return(v=e(c)(e(s).mark((function t(o){var n,a,r,c,l,d,u,_,p;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _=function(){r.classList.add("is-hidden"),d.innerHTML="",l.removeEventListener("click",p),document.body.style.overflow=""},p=function(){var e=document.querySelector(".text-input"),t=localStorage.getItem(b);if(null===t)localStorage.setItem(b,JSON.stringify([n])),l.textContent="remove from the shopping list",l.classList.add("order-btn-remove-state"),e.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>";else{var o=JSON.parse(t);if(o.includes(n)){var a=o.filter((function(e){return e!==n}));localStorage.setItem(b,JSON.stringify(a)),l.textContent="Add to shopping list",l.classList.add("order-btn"),l.classList.remove("order-btn-remove-state"),e.innerHTML=""}else o.push(n),localStorage.setItem(b,JSON.stringify(o)),l.textContent="remove from the shopping list",l.classList.add("order-btn-remove-state"),l.classList.remove("order-btn"),e.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>"}},n=o.dataset.id,console.log(n),e.next=6,(0,i.booksId)(n);case 6:a=e.sent,console.log(a),(r=document.querySelector(".backdrop")).classList.remove("is-hidden"),(c=document.querySelector(".modal")).addEventListener("click",(function(e){e.stopPropagation()})),h(a),k(c,a),document.body.style.overflow="hidden",r.addEventListener("click",_),window.document.addEventListener("keydown",(function(e){"Escape"===e.key&&_()})),document.querySelector(".close-btn ").addEventListener("click",_),(l=document.querySelector('[data-name="order-btn"]')).addEventListener("click",p),d=document.querySelector(".book-information"),u=h(a),d.innerHTML=u;case 26:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function h(t){var o=t.book_image,n=t.title,a=t.author,c=t.description,s=t.buy_links,i=s[0].url,b=s[1].url,m=s[0].url;return"\n      <img class='book_modal-book-img' src=\"".concat(o||"./src/images/without-Image/noImage-Large.png","\" alt='Book image'>\n    <div class='book_modal-book-descr-inf'>\n    <p class='book_modal-book-title'>").concat(n||"No title.","</p>\n    <p class='book_modal-book-author'>").concat(a||"No author.","</p>\n    <p class='book_modal-book-description'>").concat(c||"No description.","</p>\n    <ul class='book_modal-links-group'>\n    <li class='book_modal-links'><a href=").concat(i,' target="_blank"> <img  src=\'').concat(e(r),"' srcset=\"").concat(e(r)," 1x, ").concat(e(l)," 2x\" alt ='Amazon Icon'></a></li>\n    <li class='book_modal-links'><a href=").concat(b,' target="_blank"> <img  src=\'').concat(e(d),"' srcset=\"").concat(e(d)," 1x, ").concat(e(u)," 2x\" alt ='Apple Icon'></a></li>\n    <li class='book_modal-links'><a href=").concat(m,' target="_blank"> <img  src=\'').concat(e(_),"' srcset=\"").concat(e(_)," 1x, ").concat(e(p)," 2x\" alt ='Book Shop Icon'></a></li>\n    </ul>\n    </div>\n       ")}function k(e,t){var o=document.querySelector('[data-name="order-btn"]'),n=document.querySelector(".text-input"),a=localStorage.getItem(b);(console.log(a),console.log(t),null===a)?(o.textContent="Add to shopping list",o.classList.add("order-btn"),o.classList.remove("order-btn-remove-state"),n.innerHTML=""):JSON.parse(a).includes(t._id)?(o.textContent="remove from the shopping list",o.classList.add("order-btn-remove-state"),o.classList.remove("order-btn"),n.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>"):(o.textContent="Add to shopping list",o.classList.add("order-btn"),o.classList.remove("order-btn-remove-state"),n.innerHTML="")}c=a("bpxeT"),s=a("2TvXO");function g(){return(g=e(c)(e(s).mark((function t(){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://books-backend.p.goit.global/books/category-list");case 3:return o=e.sent,e.abrupt("return",o.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}i=a("6fhvM");var f=document.querySelector(".categories__list");function y(e){e.preventDefault();var t=e.target.dataset.categoryName;if(t){document.querySelector(".active__category").classList.remove("active__category"),document.querySelector('[data-category-name="'.concat(t,'"]')).classList.add("active__category");var o=document.createElement("h1"),n=document.createElement("ul");o.classList.add("bookcase__title","bookcase-text"),o.innerHTML=function(e){var t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];var o=e.split(" ");o.pop();var n=o.join(" ");return"".concat(n,' <span class="bookcase__filter">').concat(t,"</span>")}(t),n.classList.add("bookshelf__content","book-card__list"),"All categories"!==t?(0,i.booksCategory)(t).then((function(e){var t=document.querySelector(".bookcase"),a=e.map((function(e){var t=e.book_image,o=e.book_image_height,n=e.book_image_width,a=e.author,r=e.title,c=(e.buy_links,e._id);return"<li class='book-card__item' data-id=".concat(c,">\n<a class='book-card__link' href='#' data-id='").concat(c,"'>\n<div class='book-card__wrapper'>\n<img\nclass='book-card__image'\nsrc='").concat(t,"'\nalt=\"Here must be book's name\"\nwidth='").concat(n,"'\nheight = '").concat(o,"'\n/>\n<div class='book-card__overlay'>\n<p class='book-card__quick-view-text'>quick view</p>\n</div>\n</div>\n</a>\n<div class='book-card__wrap'>\n<h3 class='book-card__name'>").concat(r||"Unknown title","</h3>\n<p class='book-card__author'>").concat(a||"Unknown author","</p>\n</div>\n</li>")})).join("");n.innerHTML=a,t.innerHTML="",t.appendChild(o),t.appendChild(n),document.querySelectorAll(".book-card__item").forEach((function(e){return e.addEventListener("click",(function(t){t.preventDefault(),m(e)}))}))})):S()}}(function(){return g.apply(this,arguments)})().then((function(e){var t=e.map((function(e){return'<li class="categories__item" data-category-name=\''.concat(e.list_name,"'>").concat(e.list_name,"</li>")})).sort().join("");f.innerHTML="\n       <li class='categories__item active__category' data-category-name='All categories'>All categories</li>",f.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories__item").forEach((function(e){return e.addEventListener("click",y)}))}));var L;L=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("9rLGk");var w=document.querySelector(".bookcase"),E=375;window.addEventListener("resize",(function(){(window.innerWidth>767&&E<768||window.innerWidth>1439&&E<1440||window.innerWidth<1440&&E>1439||window.innerWidth<768&&E>767)&&location.reload()})),E=window.innerWidth;var H=1;function S(){return x.apply(this,arguments)}function x(){return(x=e(c)(e(s).mark((function t(){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"<h1 class='bookcase__title'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",(o=document.createElement("ul")).classList.add("bookshelf__list"),o.classList.add("list"),e.next=6,(0,i.booksApi)().then((function(e){var t=e.map((function(e){var t=e.list_name,o=e.books;return"<li class='book__card__item'>\n<h2 class='bookshelf__title__category'>".concat(t,"</h2>\n<ul class='bookshelf__content book-card__list list'>").concat(o.map((function(e){var t=e._id,o=e.book_image_height,n=e.book_image_width,a=e.author,r=e.book_image,c=e.title;return r||(r=L.image,o=500,n=330),"<li class='book-card__item'data-id=".concat(t,">\n <a class='book-card__link' href='#' data-id='").concat(t,"'>\n   <div class='book-card__wrapper'>\n     <img class='book-card__image' src='").concat(r,'\' alt="Here must be book\'s name"\n     loading="lazy"\n     width=\'').concat(n,"'\n     height='").concat(o,"'>\n     <div class='book-card__overlay'>\n       <p class='book-card__quick-view-text'>quick view</p>\n     </div>\n   </div>\n </a>\n <div class='book-card__wrap'>\n   <h3 class='book__card__name'>").concat(c||"Unknown title","</h3>\n   <p class='book__card__author'>").concat(a||"Unknown author","</p>\n </div>\n</li>")})).slice(0,H).join(""),"\n</ul>\n<button class='book__see__more__btn' type='button' data-see-more data-category-name='").concat(t,"'>see more</button>\n</li>")})).join("");o.innerHTML=t,w.innerHTML="<h1 class='bookcase__title'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",w.appendChild(o),document.querySelectorAll(".book-card__item").forEach((function(e){return e.addEventListener("click",(function(t){t.preventDefault(),m(e)}))})),document.querySelectorAll(".book__see__more__btn").forEach((function(e){return e.addEventListener("click",(function(e){e.preventDefault(),y(e)}))}))}));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}H=E<768?1:E>767&&E<1440?3:5,S(),a("18VO4");var T=document.querySelector(".top-btn");T.onclick=function(){return window.scrollTo({top:0,behavior:"smooth"})},window.onscroll=function(){return window.scrollY>1e3?T.style.opacity=1:T.style.opacity=0},a("f4zPK");var q=document.querySelector(".mask");window.addEventListener("load",(function(){q.classList.add("hide"),setTimeout((function(){q.remove()}),600)})),a("7x7K1")}();
//# sourceMappingURL=index.5df47379.js.map
