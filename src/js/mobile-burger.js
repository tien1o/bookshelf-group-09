import bodyScrollLock from 'body-scroll-lock';

(() => {
  const mobileBurgerMenu = document.querySelector('.data-burger-menu');
  const openBurgerBtn = document.querySelector('[data-menu-burger-open]');
  const closeBurgerMenuBtn = document.querySelector('[data-menu-burger-close]');

  const toggleMenu = () => {
    const isMenuOpen =
      openBurgerBtn.getAttribute('aria-expanded') === 'true' || false;
    openBurgerBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileBurgerMenu.classList.toggle('is-burger-open');

    // const scrollLockMethod = !isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openBurgerBtn.addEventListener('click', toggleMenu);
  closeBurgerMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileBurgerMenu.classList.remove('is-burger-open');
    openBurgerBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
