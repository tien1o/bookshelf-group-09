const registerModalOpenBtn = document.querySelector('[data-modal-open]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const btnSingUp = document.querySelector('[data-action="sign-up"]');
const btnSingIn = document.querySelector('[data-action="sign-in"]');
const backdrop = document.querySelector('.authorization__bacdrop');
const ESC_KEY_CODE = 'Escape';

registerModalOpenBtn.addEventListener('click', registerModalOpen);
modalCloseBtn.addEventListener('click', modalClose);

function registerModalOpen() {
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  modalCloseBtn.addEventListener('click', modalClose);
  backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscapeKeydown);
}

function modalClose() {
  modal.classList.add('is-hidden');
  document.body.style.overflow = '';
  modalCloseBtn.removeEventListener('click', modalClose);
  backdrop.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscapeKeydown);
}

function onEscapeKeydown(e) {
  if (e.key === ESC_KEY_CODE) {
    modalClose();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    modalClose();
  }
}

btnSingUp.disabled = true;
const autorizationBtnEl = document.querySelector('.authorization__btn__submit');
const signInForm = document.querySelector('#sign-in');
const signUpForm = document.querySelector('#sign-up');

btnSingIn.addEventListener('click', e => {
  e.preventDefault();
  btnSingUp.classList.remove('active-link');
  btnSingUp.classList.add('desactive-link');
  btnSingIn.classList.remove('desactive-link');
  btnSingIn.classList.add('active-link');
  autorizationBtnEl.textContent = 'Sign in';

  signInForm.classList.remove('display-form');
  signUpForm.classList.add('display-form');

  btnSingUp.disabled = false;
  btnSingIn.disabled = true;
});

btnSingUp.addEventListener('click', e => {
  e.preventDefault();
  btnSingUp.classList.add('active-link');
  btnSingUp.classList.remove('desactive-link');
  btnSingIn.classList.add('desactive-link');
  btnSingIn.classList.remove('active-link');
  autorizationBtnEl.textContent = 'Sign up';

  signInForm.classList.add('display-form');
  signUpForm.classList.remove('display-form');

  btnSingUp.disabled = true;
  btnSingIn.disabled = false;
});

const userBar = document.querySelector('.js-user-bar');
const logOutBtn = document.querySelector('.js-log-out-btn');

userBar.addEventListener('click', handleUserBarBtnClick);
// logOutBtn.addEventListener('click', handleLogOutBtnClick);

function handleUserBarBtnClick() {
  userBar.classList.toggle('is-active');
}

//   function handleLogOutBtnClick() {
//     userBar.classList.remove('is-active');

//   }
