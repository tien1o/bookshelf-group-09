!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),r[e]=t),t}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.a8109c96.js","dTkHT":"amazon.06fa7713.png","hyzQv":"amazon@2x.4eae58f9.png","fnrpS":"book.57ecc8dc.png","bS23T":"book@2x.c5385d25.png","dGKkA":"book-shop.e5effbae.png","6mEwM":"book-shop@2.3b8922c8.png","9rLGk":"noImage-Medium.53d4ac22.png","5UbS1":"index.9c2be867.css","cfiU8":"index.ba2d921c.js"}')),a("6fhvM");var c,i=a("bpxeT"),s=a("2TvXO"),l=a("6fhvM");i=a("bpxeT"),s=a("2TvXO"),l=a("6fhvM");c=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("dTkHT");var d;d=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("hyzQv");var u;u=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("fnrpS");var p;p=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("bS23T");var v;v=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("dGKkA");var m;m=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("6mEwM");var b="booksID";function _(e){return f.apply(this,arguments)}function f(){return(f=t(i)(t(s).mark((function e(n){var o,r,a,c,i,d,u,p,v;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p=function(){a.classList.add("is-hidden"),d.innerHTML="",i.removeEventListener("click",v),document.body.style.overflow=""},v=function(){var e=document.querySelector(".text-input"),t=localStorage.getItem(b);if(null===t)localStorage.setItem(b,JSON.stringify([o])),i.textContent="remove from the shopping list",i.classList.add("order-btn-remove-state"),e.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>";else{var n=JSON.parse(t);if(n.includes(o)){var r=n.filter((function(e){return e!==o}));localStorage.setItem(b,JSON.stringify(r)),i.textContent="Add to shopping list",i.classList.add("order-btn"),i.classList.remove("order-btn-remove-state"),e.innerHTML=""}else n.push(o),localStorage.setItem(b,JSON.stringify(n)),i.textContent="remove from the shopping list",i.classList.add("order-btn-remove-state"),i.classList.remove("order-btn"),e.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>"}},o=n.dataset.id,console.log(o),e.next=6,(0,l.booksId)(o);case 6:r=e.sent,console.log(r),(a=document.querySelector(".backdrop")).classList.remove("is-hidden"),(c=document.querySelector(".modal")).addEventListener("click",(function(e){e.stopPropagation()})),g(r),h(c,r),document.body.style.overflow="hidden",a.addEventListener("click",p),window.document.addEventListener("keydown",(function(e){"Escape"===e.key&&p()})),document.querySelector(".close-btn ").addEventListener("click",p),(i=document.querySelector('[data-name="order-btn"]')).addEventListener("click",v),d=document.querySelector(".book-information"),u=g(r),d.innerHTML=u;case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){var n=e.book_image,o=e.title,r=e.author,a=e.description,i=e.buy_links,s=i[0].url,l=i[1].url,b=i[0].url;return"\n      <img class='book-img' src=\"".concat(n||"./src/images/without-Image/noImage-Large.png","\" alt='Book image'>\n    <div class='book-descr-inf'>\n    <p class='book-title'>").concat(o||"No title.","</p>\n    <p class='book-author'>").concat(r||"No author.","</p>\n    <p class='book-description'>").concat(a||"No description.","</p>\n    <ul class='links-group'>\n    <li class='links'><a href=").concat(s,' target="_blank"> <img  src=\'').concat(t(c),"' srcset=\"").concat(t(c)," 1x, ").concat(t(d)," 2x\" alt ='Amazon Icon'></a></li>\n    <li class='links'><a href=").concat(l,' target="_blank"> <img  src=\'').concat(t(u),"' srcset=\"").concat(t(u)," 1x, ").concat(t(p)," 2x\" alt ='Apple Icon'></a></li>\n    <li class='links'><a href=").concat(b,' target="_blank"> <img  src=\'').concat(t(v),"' srcset=\"").concat(t(v)," 1x, ").concat(t(m)," 2x\" alt ='Book Shop Icon'></a></li>\n    </ul>\n    </div>\n       ")}function h(e,t){var n=document.querySelector('[data-name="order-btn"]'),o=document.querySelector(".text-input"),r=localStorage.getItem(b);(console.log(r),console.log(t),null===r)?(n.textContent="Add to shopping list",n.classList.add("order-btn"),n.classList.remove("order-btn-remove-state"),o.innerHTML=""):JSON.parse(r).includes(t._id)?(n.textContent="remove from the shopping list",n.classList.add("order-btn-remove-state"),n.classList.remove("order-btn"),o.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>"):(n.textContent="Add to shopping list",n.classList.add("order-btn"),n.classList.remove("order-btn-remove-state"),o.innerHTML="")}var k;k=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("9rLGk");var y=document.querySelector(".bookcase"),L=375;window.addEventListener("resize",(function(){(window.innerWidth>767&&L<768||window.innerWidth>1439&&L<1440||window.innerWidth<1440&&L>1439||window.innerWidth<768&&L>767)&&location.reload()})),L=window.innerWidth;var w=1;function E(){return S.apply(this,arguments)}function S(){return(S=t(i)(t(s).mark((function e(){var n;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"<h1 class='bookcase__title'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",(n=document.createElement("ul")).classList.add("bookshelf__list"),n.classList.add("list"),e.next=6,(0,l.booksApi)().then((function(e){var t=e.map((function(e){var t=e.list_name,n=e.books;return"<li class='book__card__item'>\n<h2 class='bookshelf__title__category'>".concat(t,"</h2>\n<ul class='bookshelf__content book-card__list list'>").concat(n.map((function(e){var t=e._id,n=e.book_image_height,o=e.book_image_width,r=e.author,a=e.book_image,c=e.title;return a||(a=k.image,n=500,o=330),"<li class='book-card__item'data-id=".concat(t,">\n <a class='book-card__link' href='#' data-id='").concat(t,"'>\n   <div class='book-card__wrapper'>\n     <img class='book-card__image' src='").concat(a,'\' alt="Here must be book\'s name"\n     loading="lazy"\n     width=\'').concat(o,"'\n     height='").concat(n,"'>\n     <div class='book-card__overlay'>\n       <p class='book-card__quick-view-text'>quick view</p>\n     </div>\n   </div>\n </a>\n <div class='book-card__wrap'>\n   <h3 class='book__card__name'>").concat(c||"Unknown title","</h3>\n   <p class='book__card__author'>").concat(r||"Unknown author","</p>\n </div>\n</li>")})).slice(0,w).join(""),"\n</ul>\n<button class='book__see__more__btn' type='button' data-see-more data-category-name='").concat(t,"'>see more</button>\n</li>")})).join("");n.innerHTML=t,y.innerHTML="<h1 class='bookcase__title'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",y.appendChild(n),document.querySelectorAll(".book-card__item").forEach((function(e){return e.addEventListener("click",(function(t){t.preventDefault(),_(e)}))}))}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}w=L<768?1:L>767&&L<1440?3:5,E(),a("18VO4");i=a("bpxeT"),s=a("2TvXO");function H(){return(H=t(i)(t(s).mark((function e(){var n;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://books-backend.p.goit.global/books/category-list");case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}l=a("6fhvM");var x=document.querySelector(".categories__list");function q(e){e.preventDefault();var t=e.target.dataset.categoryName;if(t){document.querySelector(".active__category").classList.remove("active__category"),document.querySelector('[data-category-name="'.concat(t,'"]')).classList.add("active__category");var n=document.createElement("h1"),o=document.createElement("ul");n.classList.add("bookcase__title","bookcase-text"),n.innerHTML=function(e){var t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];var n=e.split(" ");n.pop();var o=n.join(" ");return"".concat(o,' <span class="bookcase__filter">').concat(t,"</span>")}(t),o.classList.add("bookshelf__content","book-card__list"),"All categories"!==t?(0,l.booksCategory)(t).then((function(e){var t=document.querySelector(".bookcase"),r=e.map((function(e){var t=e.book_image,n=e.book_image_height,o=e.book_image_width,r=e.author,a=e.title,c=(e.buy_links,e._id);return"<li class='book-card__item'>\n<a class='book-card__link' href='#' data-id='".concat(c,"'>\n<div class='book-card__wrapper'>\n<img\nclass='book-card__image'\nsrc='").concat(t,"'\nalt=\"Here must be book's name\"\nwidth='").concat(o,"'\nheight = '").concat(n,"'\n/>\n<div class='book-card__overlay'>\n<p class='book-card__quick-view-text'>quick view</p>\n</div>\n</div>\n</a>\n<div class='book-card__wrap'>\n<h3 class='book-card__name'>").concat(a||"Unknown title","</h3>\n<p class='book-card__author'>").concat(r||"Unknown author","</p>\n</div>\n</li>")})).join("");o.innerHTML=r,t.innerHTML="",t.appendChild(n),t.appendChild(o)})):E()}}(function(){return H.apply(this,arguments)})().then((function(e){var t=e.map((function(e){return'<li class="categories__item" data-category-name=\''.concat(e.list_name,"'>").concat(e.list_name,"</li>")})).sort().join("");x.innerHTML="\n       <li class='categories__item active__category' data-category-name='All categories'>All categories</li>",x.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories__item").forEach((function(){return addEventListener("click",q)}))}));var T=document.querySelector(".top-btn");T.onclick=function(){return window.scrollTo({top:0,behavior:"smooth"})},window.onscroll=function(){return window.scrollY>1e3?T.style.opacity=1:T.style.opacity=0};var C=document.querySelector(".mask");window.addEventListener("load",(function(){C.classList.add("hide"),setTimeout((function(){C.remove()}),600)}));var A=document.querySelector("[data-modal-open]"),M=document.querySelector("[data-modal-close]"),O=document.querySelector("[data-modal]"),R=document.querySelector('[data-action="sign-up"]'),N=document.querySelector('[data-action="sign-in"]'),U=document.querySelector(".authorization__bacdrop");function B(){O.classList.add("is-hidden"),document.body.style.overflow="",M.removeEventListener("click",B),U.removeEventListener("click",j),window.removeEventListener("keydown",J)}function J(e){"Escape"===e.key&&B()}function j(e){e.currentTarget===e.target&&B()}A.addEventListener("click",(function(){O.classList.remove("is-hidden"),document.body.style.overflow="hidden",M.addEventListener("click",B),U.addEventListener("click",j),window.addEventListener("keydown",J)})),M.addEventListener("click",B),R.disabled=!0;var I=document.querySelector(".authorization__btn__submit"),z=document.querySelector("#sign-in"),F=document.querySelector("#sign-up");N.addEventListener("click",(function(e){e.preventDefault(),R.classList.remove("active-link"),R.classList.add("desactive-link"),N.classList.remove("desactive-link"),N.classList.add("active-link"),I.textContent="Sign in",z.classList.remove("display-form"),F.classList.add("display-form"),R.disabled=!1,N.disabled=!0})),R.addEventListener("click",(function(e){e.preventDefault(),R.classList.add("active-link"),R.classList.remove("desactive-link"),N.classList.add("desactive-link"),N.classList.remove("active-link"),I.textContent="Sign up",z.classList.add("display-form"),F.classList.remove("display-form"),R.disabled=!0,N.disabled=!1}));var V=document.querySelector(".js-user-bar");document.querySelector(".js-log-out-btn");V.addEventListener("click",(function(){V.classList.toggle("is-active")}))}();
//# sourceMappingURL=index.a8109c96.js.map
