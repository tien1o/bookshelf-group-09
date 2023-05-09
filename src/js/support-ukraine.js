import '../sass/_support.scss';
import { iconRender } from './iconRender';
import Swiper from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';

const listIcon = document.querySelector('.list-icon');
const icomList = document.querySelector('.icon-list');
const swiperScroll = document.querySelector('.swiper-scrollbar');
const swiperContainer = document.querySelector('.swiper');
const itemsMarkup = rendarListIcon(iconRender);
listIcon.insertAdjacentHTML('beforeend', itemsMarkup);

function rendarListIcon(iconRender) {
  return iconRender
    .map(({ title, url, img, img2 }) => {
      return `
        <li class='icon-list swiper-slide'> 
        <p class="title">${title}</p>
        <a class="sl" href="${url}" target="_blank">
        <img class="fl image-slider" src="${img, img2}">
        </a>
        </li>
        `;
    })
    .join('');
}

new Swiper(swiperContainer, {
  spaceBetween: 20, // расстояние между слайдами
  direction: 'vertical',
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
  },

  mousewheel: {
    sensitivity: 1,
  },

  rewind: true,
  slidesPerView: 3,

  breakpoints: {
    320: {
      slidesPerView: 4, //показывать по 4 превью
    },
    768: {
      slidesPerView: 6, //показывать по 6 превью
    },
  },

  scrollbar: {
    el: swiperScroll,
  },
});
