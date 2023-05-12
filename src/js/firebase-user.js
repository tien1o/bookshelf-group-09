import { app } from './firebase-config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import Notiflix from 'notiflix';
// .is-hidden
const auth = getAuth(app);

const db = getDatabase(app);
const navHeder = document.querySelector('.style-nav')
navHeder.classList.add('is-hidden');



const singBtnUp = document.querySelector('#sign-up');
const singBtnIn = document.querySelector('#sign-in');
const logOutBtn = document.querySelector('.js-log-out-btn');
const backdrop = document.querySelector('.authorization__bacdrop');
const userBarBtnText = document.querySelector('.user-bar-btn__text')
const userBar = document.querySelector('.js-user-bar')
const openModalBtn = document.querySelector('[data-modal-open]');
const signUpHeaderBtn = document.querySelector('.sign-up-btn');


singBtnUp.addEventListener('submit', registrUser )
singBtnIn.addEventListener('submit', handelSignInUserAccount)
logOutBtn.addEventListener('click', handelLogOutUserAccount);


 const testBtn = document.querySelector('.test')

function registrUser(evt) {
  evt.preventDefault();
  document.body.style.overflow = '';

  const {
    elements: { name, email, password },
  } = evt.currentTarget;

  validatePassword(password.value);
  let userEmail = email.value;
  let userPassword = password.value;
  let userName = name.value;

  if (createUser(auth, userEmail, userPassword, userName)) {
    setTimeout(() => {
      evt.target.reset();
    }, 3000);
  }

 }
 // реєструємо нового користвуча
      function createUser(auth, userEmail, userPassword, userName) {

  createUserWithEmailAndPassword(auth, userEmail, userPassword)
  .then(creat => {
    let userId = creat.user.uid;
    //зберігаємо його облікові дані у сховище Database
    writeUserData(userId, userName, userEmail);
    Notiflix.Notify.success(
      `Hello, ${userName}, your registration was successful`
    );
    backdrop.style.display = 'none';
    backdrop.classList.add('is-hidden');
    signUpHeaderBtn.classList.add('visually-hidden');
    navHeder.classList.remove('is-hidden');

  }).catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Notiflix.Notify.failure(
        'A user with this email address is already registered'
      );
    }
  });
 }


    function handelSignInUserAccount(evt) {
      evt.preventDefault();
      const {
        elements: { email, password },
      } = evt.currentTarget;
    
      let userEmail = email.value;
      let userPassword = password.value;

      if (signInUserAccount(auth, userEmail, userPassword)) {
        setTimeout(() => {
          evt.target.reset();
        }, 3000);
      }
      
    }

//створюємо функцію для можливості увійти у свій акаунт зареєстрованому користувачу
function signInUserAccount(auth, userEmail, userPassword) {
  signInWithEmailAndPassword(auth, userEmail, userPassword)
  
    .then(() => {
      backdrop.style.display = 'none';
      backdrop.classList.add('is-hidden');
      signUpHeaderBtn.classList.add('visually-hidden')


      

    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        Notiflix.Notify.failure('Your password is wrong, please try again');
      } else if (error.code === 'auth/user-not-found') {
        Notiflix.Notify.failure('Your email is wrong, please try again');
      }
      // const errorCode = error.code;
      // console.log(errorCode);
      // const errorMessage = error.message;
      // console.log(errorMessage);
    });
}
console.log(auth)

//записуємо у сховище Database облікові дані користувача
const writeUserData = (userId, userName, userEmail) => {
  set(ref(db, 'users/' + userId), {
    username: userName,
    email: userEmail,
  }).catch(error => {
    // console.log(error.code);
    // console.log(error.message);
  });
  
};

 function validatePassword(password) {
  if (password.length < 6) {
    Notiflix.Notify.failure('Password should be at least 6 characters');
    return;
  }
}


//перевіряємо, чи єактивний User на сторінці
function checkUserAuth() {
  onAuthStateChanged(auth, user => {
    if (user) {
      //витягуємо із сховища ID поточного користувача та записуємо його ім'я в userBarBtnText
      const userNameRef = ref(db, 'users/' + user.uid);
      onValue(userNameRef, name => {
        const currentUserName = name.exportVal();
        userBarBtnText.innerHTML = currentUserName.username;
    
      });
      userBar.classList.remove('visually-hidden');
      signUpHeaderBtn.classList.add('visually-hidden')
      navHeder.classList.remove('is-hidden')
      localStorage.setItem('user', 'true');
    }
  });
}
checkUserAuth();


// виход користувача зі сторінки
function handelLogOutUserAccount() {
  signOut(auth)
    .then(() => {
     
      userBar.classList.add('visually-hidden')
      signUpHeaderBtn.classList.remove('visually-hidden');
      backdrop.style.display = 'block';
      userBarBtnText.innerHTML = '';

      navHeder.classList.add('is-hidden');
      localStorage.removeItem('user');
      
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

