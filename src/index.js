import "@/css/main.scss";

import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  getDocs,
  arrayUnion,
  arrayRemove,
  query,
  where,
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTFYluEtY9D3KMM1oPnAAP6-o6I4t1EdY",
  authDomain: "english-galaxy-c4800.firebaseapp.com",
  projectId: "english-galaxy-c4800",
  storageBucket: "english-galaxy-c4800.appspot.com",
  messagingSenderId: "182593241072",
  appId: "1:182593241072:web:60de6bc116e8ac8c0a2735",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();

import Authorization from "@/pages/Authorization.js";
import Main from "@/pages/Main.js";
import Dictionary from "@/pages/Dictionary.js";
import Favorite from "@/pages/Favorite.js";
import Categories from "@/pages/Categories.js";
import Category from "@/pages/Category.js";
import Settings from "@/pages/Settings.js";
import Profile from "@/pages/Profile.js";

import Lesson1 from "@/pages/beginner/lesson1/Lesson1.js";
import Lesson2 from "@/pages/beginner/lesson2/Lesson2.js";
import Lesson3 from "@/pages/beginner/lesson3/Lesson3.js";
import Lesson4 from "@/pages/beginner/lesson4/Lesson4.js";
import Lesson5 from "@/pages/beginner/lesson5/Lesson5.js";
import Lesson6 from "@/pages/beginner/lesson6/Lesson6.js";
import Lesson7 from "@/pages/beginner/lesson7/Lesson7.js";
import Lesson8 from "@/pages/beginner/lesson8/Lesson8.js";
import Lesson9 from "@/pages/beginner/lesson9/Lesson9.js";
import Lesson10 from "@/pages/beginner/lesson10/Lesson10.js";

import Grammar1l1 from "@/pages/beginner/lesson1/grammar/Grammar1l1.js";
import Grammar2l1 from "@/pages/beginner/lesson1/grammar/Grammar2l1.js";
import Grammar3l1 from "@/pages/beginner/lesson1/grammar/Grammar3l1.js";
import Grammar4l1 from "@/pages/beginner/lesson1/grammar/Grammar4l1.js";
import Grammar5l1 from "@/pages/beginner/lesson1/grammar/Grammar5l1.js";
import Grammar1l2 from "@/pages/beginner/lesson2/grammar/Grammar1l2.js";
import Grammar2l2 from "@/pages/beginner/lesson2/grammar/Grammar2l2.js";
import Grammar3l2 from "@/pages/beginner/lesson2/grammar/Grammar3l2.js";
import Grammar4l2 from "@/pages/beginner/lesson2/grammar/Grammar4l2.js";
import Grammar5l2 from "@/pages/beginner/lesson2/grammar/Grammar5l2.js";
import Grammar1l3 from "@/pages/beginner/lesson3/grammar/Grammar1l3.js";
import Grammar2l3 from "@/pages/beginner/lesson3/grammar/Grammar2l3.js";
import Grammar3l3 from "@/pages/beginner/lesson3/grammar/Grammar3l3.js";
import Grammar1l4 from "@/pages/beginner/lesson4/grammar/Grammar1l4.js";
import Grammar2l4 from "@/pages/beginner/lesson4/grammar/Grammar2l4.js";
import Grammar3l4 from "@/pages/beginner/lesson4/grammar/Grammar3l4.js";
import Grammar4l4 from "@/pages/beginner/lesson4/grammar/Grammar4l4.js";
import Grammar1l5 from "@/pages/beginner/lesson5/grammar/Grammar1l5.js";
import Grammar2l5 from "@/pages/beginner/lesson5/grammar/Grammar2l5.js";
import Grammar1l6 from "@/pages/beginner/lesson6/grammar/Grammar1l6.js";
import Grammar2l6 from "@/pages/beginner/lesson6/grammar/Grammar2l6.js";
import Grammar1l7 from "@/pages/beginner/lesson7/grammar/Grammar1l7.js";
import Grammar2l7 from "@/pages/beginner/lesson7/grammar/Grammar2l7.js";
import Grammar3l7 from "@/pages/beginner/lesson7/grammar/Grammar3l7.js";
import Grammar1l8 from "@/pages/beginner/lesson8/grammar/Grammar1l8.js";
import Grammar2l8 from "@/pages/beginner/lesson8/grammar/Grammar2l8.js";
import Grammar1l9 from "@/pages/beginner/lesson9/grammar/Grammar1l9.js";
import Grammar2l9 from "@/pages/beginner/lesson9/grammar/Grammar2l9.js";
import Grammar3l9 from "@/pages/beginner/lesson9/grammar/Grammar3l9.js";
import Grammar1l10 from "@/pages/beginner/lesson10/grammar/Grammar1l10.js";
import Grammar2l10 from "@/pages/beginner/lesson10/grammar/Grammar2l10.js";
import Grammar3l10 from "@/pages/beginner/lesson10/grammar/Grammar3l10.js";

import Words1l1 from "@/pages/beginner/lesson1/words/Words1l1.js";
import Words2l1 from "@/pages/beginner/lesson1/words/Words2l1.js";
import Words3l1 from "@/pages/beginner/lesson1/words/Words3l1.js";
import Words4l1 from "@/pages/beginner/lesson1/words/Words4l1.js";
import Words5l1 from "@/pages/beginner/lesson1/words/Words5l1.js";
import Words6l1 from "@/pages/beginner/lesson1/words/Words6l1.js";
import Words7l1 from "@/pages/beginner/lesson1/words/Words7l1.js";
import Words8l1 from "@/pages/beginner/lesson1/words/Words8l1.js";
import Words1l2 from "@/pages/beginner/lesson2/words/Words1l2.js";
import Words2l2 from "@/pages/beginner/lesson2/words/Words2l2.js";
import Words3l2 from "@/pages/beginner/lesson2/words/Words3l2.js";
import Words4l2 from "@/pages/beginner/lesson2/words/Words4l2.js";
import Words5l2 from "@/pages/beginner/lesson2/words/Words5l2.js";
import Words6l2 from "@/pages/beginner/lesson2/words/Words6l2.js";
import Words1l3 from "@/pages/beginner/lesson3/words/Words1l3.js";
import Words2l3 from "@/pages/beginner/lesson3/words/Words2l3.js";
import Words3l3 from "@/pages/beginner/lesson3/words/Words3l3.js";
import Words4l3 from "@/pages/beginner/lesson3/words/Words4l3.js";
import Words5l3 from "@/pages/beginner/lesson3/words/Words5l3.js";
import Words1l4 from "@/pages/beginner/lesson4/words/Words1l4.js";
import Words2l4 from "@/pages/beginner/lesson4/words/Words2l4.js";
import Words3l4 from "@/pages/beginner/lesson4/words/Words3l4.js";
import Words4l4 from "@/pages/beginner/lesson4/words/Words4l4.js";
import Words5l4 from "@/pages/beginner/lesson4/words/Words5l4.js";
import Words1l5 from "@/pages/beginner/lesson5/words/Words1l5.js";
import Words2l5 from "@/pages/beginner/lesson5/words/Words2l5.js";
import Words3l5 from "@/pages/beginner/lesson5/words/Words3l5.js";
import Words4l5 from "@/pages/beginner/lesson5/words/Words4l5.js";
import Words5l5 from "@/pages/beginner/lesson5/words/Words5l5.js";
import Words1l6 from "@/pages/beginner/lesson6/words/Words1l6.js";
import Words2l6 from "@/pages/beginner/lesson6/words/Words2l6.js";
import Words3l6 from "@/pages/beginner/lesson6/words/Words3l6.js";
import Words4l6 from "@/pages/beginner/lesson6/words/Words4l6.js";
import Words1l7 from "@/pages/beginner/lesson7/words/Words1l7.js";
import Words2l7 from "@/pages/beginner/lesson7/words/Words2l7.js";
import Words3l7 from "@/pages/beginner/lesson7/words/Words3l7.js";
import Words4l7 from "@/pages/beginner/lesson7/words/Words4l7.js";
import Words5l7 from "@/pages/beginner/lesson7/words/Words5l7.js";
import Words1l8 from "@/pages/beginner/lesson8/words/Words1l8.js";
import Words2l8 from "@/pages/beginner/lesson8/words/Words2l8.js";
import Words3l8 from "@/pages/beginner/lesson8/words/Words3l8.js";
import Words4l8 from "@/pages/beginner/lesson8/words/Words4l8.js";
import Words5l8 from "@/pages/beginner/lesson8/words/Words5l8.js";
import Words1l9 from "@/pages/beginner/lesson9/words/Words1l9.js";
import Words2l9 from "@/pages/beginner/lesson9/words/Words2l9.js";
import Words3l9 from "@/pages/beginner/lesson9/words/Words3l9.js";
import Words4l9 from "@/pages/beginner/lesson9/words/Words4l9.js";
import Words5l9 from "@/pages/beginner/lesson9/words/Words5l9.js";
import Words1l10 from "@/pages/beginner/lesson10/words/Words1l10.js";
import Words2l10 from "@/pages/beginner/lesson10/words/Words2l10.js";
import Words3l10 from "@/pages/beginner/lesson10/words/Words3l10.js";
import Words4l10 from "@/pages/beginner/lesson10/words/Words4l10.js";
import Words5l10 from "@/pages/beginner/lesson10/words/Words5l10.js";

import Mistake1l1 from "@/pages/beginner/lesson1/mistake/Mistake1l1.js";
import Mistake2l1 from "@/pages/beginner/lesson1/mistake/Mistake2l1.js";
import Mistake3l1 from "@/pages/beginner/lesson1/mistake/Mistake3l1.js";
import Mistake4l1 from "@/pages/beginner/lesson1/mistake/Mistake4l1.js";
import Mistake1l2 from "@/pages/beginner/lesson2/mistake/Mistake1l2.js";
import Mistake2l2 from "@/pages/beginner/lesson2/mistake/Mistake2l2.js";
import Mistake1l3 from "@/pages/beginner/lesson3/mistake/Mistake1l3.js";
import Mistake2l3 from "@/pages/beginner/lesson3/mistake/Mistake2l3.js";
import Mistake3l3 from "@/pages/beginner/lesson3/mistake/Mistake3l3.js";
import Mistake4l3 from "@/pages/beginner/lesson3/mistake/Mistake4l3.js";
import Mistake1l4 from "@/pages/beginner/lesson4/mistake/Mistake1l4.js";
import Mistake2l4 from "@/pages/beginner/lesson4/mistake/Mistake2l4.js";
import Mistake3l4 from "@/pages/beginner/lesson4/mistake/Mistake3l4.js";
import Mistake4l4 from "@/pages/beginner/lesson4/mistake/Mistake4l4.js";
import Mistake1l5 from "@/pages/beginner/lesson5/mistake/Mistake1l5.js";
import Mistake2l5 from "@/pages/beginner/lesson5/mistake/Mistake2l5.js";
import Mistake3l5 from "@/pages/beginner/lesson5/mistake/Mistake3l5.js";
import Mistake4l5 from "@/pages/beginner/lesson5/mistake/Mistake4l5.js";
import Mistake1l10 from "@/pages/beginner/lesson10/mistake/Mistake1l10.js";
import Mistake2l10 from "@/pages/beginner/lesson10/mistake/Mistake2l10.js";
import Mistake3l10 from "@/pages/beginner/lesson10/mistake/Mistake3l10.js";
import Mistake4l10 from "@/pages/beginner/lesson10/mistake/Mistake4l10.js";

import Test1l1 from "@/pages/beginner/lesson1/test/Test1l1.js";
import Test2l1 from "@/pages/beginner/lesson1/test/Test2l1.js";
import Test3l1 from "@/pages/beginner/lesson1/test/Test3l1.js";
import Test4l1 from "@/pages/beginner/lesson1/test/Test4l1.js";
import Test5l1 from "@/pages/beginner/lesson1/test/Test5l1.js";
import Test1l2 from "@/pages/beginner/lesson2/test/Test1l2.js";
import Test2l2 from "@/pages/beginner/lesson2/test/Test2l2.js";
import Test3l2 from "@/pages/beginner/lesson2/test/Test3l2.js";
import Test4l2 from "@/pages/beginner/lesson2/test/Test4l2.js";
import Test5l2 from "@/pages/beginner/lesson2/test/Test5l2.js";
import Test1l3 from "@/pages/beginner/lesson3/test/Test1l3.js";
import Test2l3 from "@/pages/beginner/lesson3/test/Test2l3.js";
import Test3l3 from "@/pages/beginner/lesson3/test/Test3l3.js";
import Test4l3 from "@/pages/beginner/lesson3/test/Test4l3.js";
import Test5l3 from "@/pages/beginner/lesson3/test/Test5l3.js";
import Test1l4 from "@/pages/beginner/lesson4/test/Test1l4.js";
import Test2l4 from "@/pages/beginner/lesson4/test/Test2l4.js";
import Test3l4 from "@/pages/beginner/lesson4/test/Test3l4.js";
import Test4l4 from "@/pages/beginner/lesson4/test/Test4l4.js";
import Test5l4 from "@/pages/beginner/lesson4/test/Test5l4.js";
import Test1l5 from "@/pages/beginner/lesson5/test/Test1l5.js";
import Test2l5 from "@/pages/beginner/lesson5/test/Test2l5.js";
import Test3l5 from "@/pages/beginner/lesson5/test/Test3l5.js";
import Test4l5 from "@/pages/beginner/lesson5/test/Test4l5.js";
import Test5l5 from "@/pages/beginner/lesson5/test/Test5l5.js";
import Test1l6 from "@/pages/beginner/lesson6/test/Test1l6.js";
import Test2l6 from "@/pages/beginner/lesson6/test/Test2l6.js";
import Test3l6 from "@/pages/beginner/lesson6/test/Test3l6.js";
import Test4l6 from "@/pages/beginner/lesson6/test/Test4l6.js";
import Test5l6 from "@/pages/beginner/lesson6/test/Test5l6.js";
import Test1l7 from "@/pages/beginner/lesson7/test/Test1l7.js";
import Test2l7 from "@/pages/beginner/lesson7/test/Test2l7.js";
import Test3l7 from "@/pages/beginner/lesson7/test/Test3l7.js";
import Test4l7 from "@/pages/beginner/lesson7/test/Test4l7.js";
import Test5l7 from "@/pages/beginner/lesson7/test/Test5l7.js";
import Test1l8 from "@/pages/beginner/lesson8/test/Test1l8.js";
import Test2l8 from "@/pages/beginner/lesson8/test/Test2l8.js";
import Test3l8 from "@/pages/beginner/lesson8/test/Test3l8.js";
import Test4l8 from "@/pages/beginner/lesson8/test/Test4l8.js";
import Test5l8 from "@/pages/beginner/lesson8/test/Test5l8.js";
import Test1l9 from "@/pages/beginner/lesson9/test/Test1l9.js";
import Test2l9 from "@/pages/beginner/lesson9/test/Test2l9.js";
import Test3l9 from "@/pages/beginner/lesson9/test/Test3l9.js";
import Test4l9 from "@/pages/beginner/lesson9/test/Test4l9.js";
import Test5l9 from "@/pages/beginner/lesson9/test/Test5l9.js";
import Test1l10 from "@/pages/beginner/lesson10/test/Test1l10.js";
import Test2l10 from "@/pages/beginner/lesson10/test/Test2l10.js";
import Test3l10 from "@/pages/beginner/lesson10/test/Test3l10.js";
import Test4l10 from "@/pages/beginner/lesson10/test/Test4l10.js";
import Test5l10 from "@/pages/beginner/lesson10/test/Test5l10.js";

import Matchingl1 from "@/pages/beginner/lesson1/matching/Matchingl1.js";
import Matchingl2 from "@/pages/beginner/lesson2/matching/Matchingl2.js";
import Matchingl3 from "@/pages/beginner/lesson3/matching/Matchingl3.js";
import Matchingl4 from "@/pages/beginner/lesson4/matching/Matchingl4.js";
import Matchingl5 from "@/pages/beginner/lesson5/matching/Matchingl5.js";
import Matchingl6 from "@/pages/beginner/lesson6/matching/Matchingl6.js";
import Matchingl7 from "@/pages/beginner/lesson7/matching/Matchingl7.js";
import Matchingl8 from "@/pages/beginner/lesson8/matching/Matchingl8.js";
import Matchingl9 from "@/pages/beginner/lesson9/matching/Matchingl9.js";
import Matchingl10 from "@/pages/beginner/lesson10/matching/Matchingl10.js";

import ErrorPage from "@/pages/ErrorPage.js";
import ContentContainer from "@/components/ContentContainer.js";

const components = {
  content: ContentContainer,
};

const routes = {
  authorization: Authorization,
  main: Main,
  dictionary: Dictionary,
  favorite: Favorite,
  categories: Categories,
  category: Category,
  settings: Settings,
  profile: Profile,

  lesson1: Lesson1,
  lesson2: Lesson2,
  lesson3: Lesson3,
  lesson4: Lesson4,
  lesson5: Lesson5,
  lesson6: Lesson6,
  lesson7: Lesson7,
  lesson8: Lesson8,
  lesson9: Lesson9,
  lesson10: Lesson10,

  grammar1l1: Grammar1l1,
  grammar2l1: Grammar2l1,
  grammar3l1: Grammar3l1,
  grammar4l1: Grammar4l1,
  grammar5l1: Grammar5l1,
  grammar1l2: Grammar1l2,
  grammar2l2: Grammar2l2,
  grammar3l2: Grammar3l2,
  grammar4l2: Grammar4l2,
  grammar5l2: Grammar5l2,
  grammar1l3: Grammar1l3,
  grammar2l3: Grammar2l3,
  grammar3l3: Grammar3l3,
  grammar1l4: Grammar1l4,
  grammar2l4: Grammar2l4,
  grammar3l4: Grammar3l4,
  grammar4l4: Grammar4l4,
  grammar1l5: Grammar1l5,
  grammar2l5: Grammar2l5,
  grammar1l6: Grammar1l6,
  grammar2l6: Grammar2l6,
  grammar1l7: Grammar1l7,
  grammar2l7: Grammar2l7,
  grammar3l7: Grammar3l7,
  grammar1l8: Grammar1l8,
  grammar2l8: Grammar2l8,
  grammar1l9: Grammar1l9,
  grammar2l9: Grammar2l9,
  grammar3l9: Grammar3l9,
  grammar1l10: Grammar1l10,
  grammar2l10: Grammar2l10,
  grammar3l10: Grammar3l10,

  words1l1: Words1l1,
  words2l1: Words2l1,
  words3l1: Words3l1,
  words4l1: Words4l1,
  words5l1: Words5l1,
  words6l1: Words6l1,
  words7l1: Words7l1,
  words8l1: Words8l1,
  words1l2: Words1l2,
  words2l2: Words2l2,
  words3l2: Words3l2,
  words4l2: Words4l2,
  words5l2: Words5l2,
  words6l2: Words6l2,
  words1l3: Words1l3,
  words2l3: Words2l3,
  words3l3: Words3l3,
  words4l3: Words4l3,
  words5l3: Words5l3,
  words1l4: Words1l4,
  words2l4: Words2l4,
  words3l4: Words3l4,
  words4l4: Words4l4,
  words5l4: Words5l4,
  words1l5: Words1l5,
  words2l5: Words2l5,
  words3l5: Words3l5,
  words4l5: Words4l5,
  words5l5: Words5l5,
  words1l6: Words1l6,
  words2l6: Words2l6,
  words3l6: Words3l6,
  words4l6: Words4l6,
  words1l7: Words1l7,
  words2l7: Words2l7,
  words3l7: Words3l7,
  words4l7: Words4l7,
  words5l7: Words5l7,
  words1l8: Words1l8,
  words2l8: Words2l8,
  words3l8: Words3l8,
  words4l8: Words4l8,
  words5l8: Words5l8,
  words1l9: Words1l9,
  words2l9: Words2l9,
  words3l9: Words3l9,
  words4l9: Words4l9,
  words5l9: Words5l9,
  words1l10: Words1l10,
  words2l10: Words2l10,
  words3l10: Words3l10,
  words4l10: Words4l10,
  words5l10: Words5l10,

  mistake1l1: Mistake1l1,
  mistake2l1: Mistake2l1,
  mistake3l1: Mistake3l1,
  mistake4l1: Mistake4l1,
  mistake1l2: Mistake1l2,
  mistake2l2: Mistake2l2,
  mistake1l3: Mistake1l3,
  mistake2l3: Mistake2l3,
  mistake3l3: Mistake3l3,
  mistake4l3: Mistake4l3,
  mistake1l4: Mistake1l4,
  mistake2l4: Mistake2l4,
  mistake3l4: Mistake3l4,
  mistake4l4: Mistake4l4,
  mistake1l5: Mistake1l5,
  mistake2l5: Mistake2l5,
  mistake3l5: Mistake3l5,
  mistake4l5: Mistake4l5,
  mistake1l10: Mistake1l10,
  mistake2l10: Mistake2l10,
  mistake3l10: Mistake3l10,
  mistake4l10: Mistake4l10,

  test1l1: Test1l1,
  test2l1: Test2l1,
  test3l1: Test3l1,
  test4l1: Test4l1,
  test5l1: Test5l1,
  test1l2: Test1l2,
  test2l2: Test2l2,
  test3l2: Test3l2,
  test4l2: Test4l2,
  test5l2: Test5l2,
  test1l3: Test1l3,
  test2l3: Test2l3,
  test3l3: Test3l3,
  test4l3: Test4l3,
  test5l3: Test5l3,
  test1l4: Test1l4,
  test2l4: Test2l4,
  test3l4: Test3l4,
  test4l4: Test4l4,
  test5l4: Test5l4,
  test1l5: Test1l5,
  test2l5: Test2l5,
  test3l5: Test3l5,
  test4l5: Test4l5,
  test5l5: Test5l5,
  test1l6: Test1l6,
  test2l6: Test2l6,
  test3l6: Test3l6,
  test4l6: Test4l6,
  test5l6: Test5l6,
  test1l7: Test1l7,
  test2l7: Test2l7,
  test3l7: Test3l7,
  test4l7: Test4l7,
  test5l7: Test5l7,
  test1l8: Test1l8,
  test2l8: Test2l8,
  test3l8: Test3l8,
  test4l8: Test4l8,
  test5l8: Test5l8,
  test1l9: Test1l9,
  test2l9: Test2l9,
  test3l9: Test3l9,
  test4l9: Test4l9,
  test5l9: Test5l9,
  test1l10: Test1l10,
  test2l10: Test2l10,
  test3l10: Test3l10,
  test4l10: Test4l10,
  test5l10: Test5l10,

  matchingl1: Matchingl1,
  matchingl2: Matchingl2,
  matchingl3: Matchingl3,
  matchingl4: Matchingl4,
  matchingl5: Matchingl5,
  matchingl6: Matchingl6,
  matchingl7: Matchingl7,
  matchingl8: Matchingl8,
  matchingl9: Matchingl9,
  matchingl10: Matchingl10,

  default: Authorization,
  error: ErrorPage,
};

/* ----- spa init module --- */
const mySPA = (function () {
  /* ------- begin view -------- */
  function ModuleView() {
    let myModuleContainer = null;
    let contentContainer = null;
    let routes = null;

    this.init = function (_container, _routes) {
      myModuleContainer = _container;
      routes = _routes;
      contentContainer = myModuleContainer.querySelector("#content");
    };

    this.renderContent = function (_hashPageName) {
      let routeName = "authorization";

      if (_hashPageName.length > 0) {
        routeName = _hashPageName in routes ? _hashPageName : "error";
      }

      window.document.title = routes[routeName].title;
      contentContainer.innerHTML = routes[routeName].render(`${routeName}`);
    };

    this.rightPanel = function (container) {
      container.classList.toggle("right-panel-active");
    };

    this.showSignInError = function (errors, errorEmail, errorPassword) {
      errorEmail.innerHTML = errors.email;
      errorPassword.innerHTML = errors.password;
    };

    this.showSignUpError = function (
      errors,
      errorSurname,
      errorName,
      errorEmail,
      errorPassword
    ) {
      errorSurname.innerHTML = errors.surname;
      errorName.innerHTML = errors.name;
      errorEmail.innerHTML = errors.email;
      errorPassword.innerHTML = errors.password;
    };

    this.disabledBtn = function (btn) {
      btn.classList.remove("task__check-disabled");
    };

    this.showLevel = function (levelHTML, level) {
      levelHTML.textContent = level;
    };

    this.checkedVibration = function (vibrate, checkbox) {
      checkbox.checked = vibrate;
    };

    this.showInfo = function (inputName, inputSurname, inputEmail) {
      inputName.value = JSON.parse(localStorage.getItem("user")).name;
      inputSurname.value = JSON.parse(localStorage.getItem("user")).surname;
      inputEmail.value = JSON.parse(localStorage.getItem("user")).email;
    };

    this.btnReadOnly = function (inputName, inputSurname, btn) {
      if (btn.textContent === "Изменить данные") {
        inputName.readOnly = false;
        inputSurname.readOnly = false;
        btn.textContent = "Сохранить";
      } else if (btn.textContent === "Сохранить") {
        inputName.readOnly = true;
        inputSurname.readOnly = true;
        btn.textContent = "Изменить данные";
      }
    };

    this.showModal = function (modal) {
      modal.showModal();
    };

    this.closeModal = function (modal) {
      modal.close();
    };

    this.showPasswordsError = function (errors, errorCurrent, errorNew) {
      errorCurrent.innerHTML = errors.currentPasswordError;
      errorNew.innerHTML = errors.newPasswordError;
    };

    this.renderWords = function (word, cards) {
      cards.innerHTML += `
          <div class="dictionary__card">
            <div class="dictionary__card-content">
              <div class="dictionary__card-left">
                <div class="dictionary__card-favorite">
                  <input name="${word.word}" class="dictionary__card-favorite-input" type="radio">
                  <label class="dictionary__card-favorite-label" title="Добавить в избранное"></label>
                </div>
              </div>
              <div class="dictionary__card-word">${word.word}</div>
              <div class="dictionary__card-right">
                <button class="dictionary__card-right-button"><img class="dictionary__card-right-image" src="images/sound.png"></button>
                <button class="dictionary__card-right-more"></button>
              </div>
            </div>
            <div class="dictionary__card-overlay dictionary__card-overlay-hide">
              <p class="dictionary__card-translate">${word.translation}</p>
              <p class="dictionary__card-transcription">${word.transcription}</p>
            </div>
          </div>`;
    };

    this.displayCardOverlay = function (card) {
      card.classList.toggle("dictionary__card-overlay-hide");
    };

    this.renderFavoriteWords = function (cards, word) {
      cards.innerHTML += `
        <div class="dictionary__card">
          <div class="dictionary__card-content">
            <div class="dictionary__card-left">
              <div class="dictionary__card-delete">
                <input name="${word.word}" class="dictionary__card-delete-input" type="radio" />
                <label title="Добавить в избранное"></label>
              </div>
            </div>
            <div class="dictionary__card-word">${word.word}</div>
            <div class="dictionary__card-right">
              <button class="dictionary__card-right-button">
                <img src="images/sound.png" class="dictionary__card-right-image" />
              </button>
              <button class="dictionary__card-right-more"></button>
            </div>
          </div>
          <div class="dictionary__card-overlay dictionary__card-overlay-hide">
            <p class="dictionary__card-translate">${word.translation}</p>
            <p class="dictionary__card-transcription">${word.transcription}</p>
          </div>
        </div>
      `;
    };

    this.renderCategoryWords = function (word, cards) {
      cards.innerHTML += `
      <div class="dictionary__card">
        <div class="dictionary__card-content">
          <div class="dictionary__card-word">${word.word}</div>
          <div class="dictionary__card-right">
            <button class="dictionary__card-right-button""><img src="images/sound.png" class="dictionary__card-right-image" /></button>
            <button class="dictionary__card-right-more"></button>
          </div>
        </div>
        <div class="dictionary__card-overlay dictionary__card-overlay-hide">
          <p class="dictionary__card-translate">Перевод: ${word.translation}</p>
          <p class="dictionary__card-transcription">Транскрипция: ${word.transcription}</p>
        </div>
      </div>
      `;
    };

    this.renderPhoto = function (img, url) {
      img.setAttribute("src", url);
    };
  }
  /* -------- end view --------- */

  /* ------- begin model ------- */
  function ModuleModel() {
    let myModuleView = null;

    this.init = function (view) {
      myModuleView = view;
    };

    this.updateState = function (_pageName) {
      myModuleView.renderContent(_pageName);

      if (
        _pageName === "matchingl1" ||
        _pageName === "matchingl2" ||
        _pageName === "matchingl3" ||
        _pageName === "matchingl4" ||
        _pageName === "matchingl5" ||
        _pageName === "matchingl6" ||
        _pageName === "matchingl7" ||
        _pageName === "matchingl8" ||
        _pageName === "matchingl9" ||
        _pageName === "matchingl10"
      ) {
        this.dragDrop();
      }

      if (_pageName === "dictionary") {
        this.addWords();
      }

      if (_pageName === "favorite") {
        this.addFavoriteWords();
      }

      if (_pageName === "settings") {
        this.changeLevel();
        this.checkVibration();
      }

      if (_pageName === "profile") {
        this.getPhoto();
        this.getInfo();
      }
    };

    this.rightPanel = (container) => {
      myModuleView.rightPanel(container);
    };

    this.createUser = async function (signUpValues, hashPageName) {
      let errors = {
        surname: "",
        name: "",
        email: "",
        password: "",
      };

      const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const password_pattern =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

      if (signUpValues.surname === "") {
        errors.surname = "Введите фамилию";
      } else {
        errors.surname = "";
      }

      if (signUpValues.name === "") {
        errors.name = "Введите имя";
      } else {
        errors.name = "";
      }

      if (signUpValues.email === "") {
        errors.email = "Введите почту";
      } else if (!email_pattern.test(signUpValues.email)) {
        errors.email = "Электронная почта не соответствует";
      } else {
        errors.email = "";
      }

      const q = query(
        collection(db, "users"),
        where("email", "==", signUpValues.email)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        errors.email = "Эта электронная почта занята";
      }

      if (signUpValues.password === "") {
        errors.password = "Введите пароль";
      } else if (!password_pattern.test(signUpValues.password)) {
        errors.password = "Пароль не соответствует";
      } else {
        errors.password = "";
      }

      const errorSurname = document.getElementById("sign-up__error-surname");
      const errorName = document.getElementById("sign-up__error-name");
      const errorEmail = document.getElementById("sign-up__error-email");
      const errorPassword = document.getElementById("sign-up__error-password");

      if (errors.surname || errors.name || errors.email || errors.password) {
        myModuleView.showSignUpError(
          errors,
          errorSurname,
          errorName,
          errorEmail,
          errorPassword
        );
      } else {
        addDoc(collection(db, "users"), {
          email: signUpValues.email,
          password: signUpValues.password,
          surname: signUpValues.surname,
          name: signUpValues.name,
          level: "A0",
          rating: "0",
          vibr: true,
          image: "default.jpg",
        }).then((user) => {
          setDoc(doc(db, "usersWords", user.id), {
            words: [],
          }).then(() => {
            const currentUser = {
              id: user.id,
              email: signUpValues.email,
              password: signUpValues.password,
              surname: signUpValues.surname,
              name: signUpValues.name,
              level: "A0",
              rating: "0",
              vibr: true,
              image: "default.jpg",
            };
            localStorage.setItem("user", JSON.stringify(currentUser));
            window.location.hash = hashPageName;
            myModuleView.renderContent(hashPageName);
          });
        });
      }
    };

    this.signIn = function (signInValues, hashPageName) {
      let errors = {
        email: "",
        password: "",
      };
      const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (signInValues.email === "") {
        errors.email = "Введите почту";
      } else if (!email_pattern.test(signInValues.email)) {
        errors.email = "Электронная почта не соответствует";
      } else {
        errors.email = "";
      }

      if (signInValues.password === "") {
        errors.password = "Введите пароль";
      } else {
        errors.password = "";
      }

      const errorEmail = document.getElementById("sign-in__error-email");
      const errorPassword = document.getElementById("sign-in__error-password");

      if (errors.email || errors.password) {
        myModuleView.showSignInError(errors, errorEmail, errorPassword);
      } else {
        getDocs(
          query(
            collection(db, "users"),
            where("email", "==", signInValues.email),
            where("password", "==", signInValues.password)
          )
        ).then((docs) => {
          if (docs.empty) {
            errors.password = "Неверная почта или пароль";
            myModuleView.showSignInError(errors, errorEmail, errorPassword);
          } else {
            let currentUser = {};
            docs.forEach((doc) => {
              currentUser = {
                id: doc.id,
                email: doc.data().email,
                password: doc.data().password,
                name: doc.data().name,
                surname: doc.data().surname,
                rating: doc.data().rating,
                vibr: doc.data().vibr,
                level: doc.data().level,
                image: doc.data().image,
              };
            });
            localStorage.setItem("user", JSON.stringify(currentUser));
            window.location.hash = hashPageName;
            myModuleView.renderContent(hashPageName);
          }
        });
      }
    };

    this.voice = function (word) {
      let speech = new SpeechSynthesisUtterance();

      speech.text = word.textContent;
      speech.lang = "en-US";

      speechSynthesis.speak(speech);
    };

    this.disabledBtn = function (btn) {
      myModuleView.disabledBtn(btn);
    };

    this.checkCheckbox = function (btn) {
      let radioButtons = null;
      let radioButton = null;
      if (btn.textContent === "Проверить") {
        radioButtons = document.querySelectorAll('input[type="radio"]');
        for (radioButton of radioButtons) {
          const checkbox = radioButton.nextElementSibling;
          if (radioButton.getAttribute("id") === "checkbox-true") {
            checkbox.classList.add("true");
          } else {
            checkbox.classList.add("false");
          }
        }
        btn.textContent = "Далее";

        if (JSON.parse(localStorage.getItem("user")).vibr === true) {
          this.vibrate();
        }
        this.sound();
      } else if (btn.textContent === "Далее") {
        const hash = btn.getAttribute("href");
        const hashPageName = hash.slice(1).toLowerCase();
        window.location.hash = hashPageName;
      }
    };

    this.vibrate = function () {
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(500);
      }
    };

    this.sound = function () {
      const audio = new Audio("@/sound/succes.mp3");
      audio.play();
    };

    this.dragDrop = function () {
      const tasksListElement = document.querySelector(".matching__list");
      const taskElements = tasksListElement.querySelectorAll(".matching__item");

      for (const task of taskElements) {
        task.draggable = true;
      }

      tasksListElement.addEventListener("dragstart", (evt) => {
        evt.target.classList.add("selected");
      });

      tasksListElement.addEventListener("dragend", (evt) => {
        evt.target.classList.remove("selected");
      });

      const getNextElement = (cursorPosition, currentElement) => {
        const currentElementCoord = currentElement.getBoundingClientRect();
        const currentElementCenter =
          currentElementCoord.y + currentElementCoord.height / 2;

        const nextElement =
          cursorPosition < currentElementCenter
            ? currentElement
            : currentElement.nextElementSibling;

        return nextElement;
      };

      tasksListElement.addEventListener("dragover", (evt) => {
        evt.preventDefault();

        const activeElement = tasksListElement.querySelector(".selected");
        const currentElement = evt.target;

        const isMoveable =
          activeElement !== currentElement &&
          currentElement.classList.contains("matching__item");

        if (!isMoveable) {
          return;
        }

        const nextElement = getNextElement(evt.clientY, currentElement);

        if (
          (nextElement &&
            activeElement === nextElement.previousElementSibling) ||
          activeElement === nextElement
        ) {
          return;
        }
        tasksListElement.insertBefore(activeElement, nextElement);
        trueValueFunction();
      });

      function trueValueFunction() {
        let items = document.querySelectorAll(".matching__item");
        let trueValue = false;
        for (let i = 0; i < items.length; i++) {
          if (
            items[i].getAttribute("id").replace("matching__item-", "") ==
            i + 1
          ) {
            trueValue = true;
          } else {
            trueValue = false;
            break;
          }
        }

        if (trueValue === true) {
          document
            .querySelector(".matching__check")
            .classList.remove("matching__check-disabled");
          for (let i = 0; i < items.length; i++) {
            items[i].style.border = "2px solid green";
          }
        } else if (trueValue === false) {
          for (let i = 0; i < items.length; i++) {
            items[i].style.border = "2px solid red";
          }
        }
      }
    };

    this.changeLevel = function () {
      const level = JSON.parse(localStorage.getItem("user")).level;
      myModuleView.showLevel(document.querySelector(".settings__level"), level);
    };

    this.checkVibration = function () {
      const vibrate = JSON.parse(localStorage.getItem("user")).vibr;
      const checkbox = document.querySelector("#vibration");

      myModuleView.checkedVibration(vibrate, checkbox);
    };

    this.updateVibration = function () {
      updateDoc(doc(db, "users", JSON.parse(localStorage.getItem("user")).id), {
        vibr: !JSON.parse(localStorage.getItem("user")).vibr,
      }).then(() => {
        let currentUser = JSON.parse(localStorage.getItem("user"));
        currentUser.vibr = !currentUser.vibr;
        localStorage.setItem("user", JSON.stringify(currentUser));
      });
    };

    this.updateRating = function (id) {
      updateDoc(doc(db, "users", JSON.parse(localStorage.getItem("user")).id), {
        rating: id.replace("rating-", ""),
      }).then(() => {
        let currentUser = JSON.parse(localStorage.getItem("user"));
        currentUser.rating = id.replace("rating-", "");
        localStorage.setItem("user", JSON.stringify(currentUser));
      });
    };

    this.changePhoto = function (fileList) {
      const regex = /()*\.(?:jpg|gif|png|jpeg)/g;
      const result = regex.test(fileList.name);
      if (result) {
        uploadBytes(
          ref(storage, `images/${JSON.parse(localStorage.getItem("user")).id}`),
          fileList
        ).then(() => {
          updateDoc(
            doc(db, "users", JSON.parse(localStorage.getItem("user")).id),
            {
              image: JSON.parse(localStorage.getItem("user")).id,
            }
          ).then(() => {
            let currentUser = JSON.parse(localStorage.getItem("user"));
            currentUser.image = JSON.parse(localStorage.getItem("user")).id;
            localStorage.setItem("user", JSON.stringify(currentUser));
            this.getPhoto();
          });
        });
      }
    };

    this.getPhoto = function () {
      getDownloadURL(
        ref(storage, `images/${JSON.parse(localStorage.getItem("user")).image}`)
      ).then((url) => {
        myModuleView.renderPhoto(document.getElementById("profile-img"), url);
      });
    };

    this.getInfo = function () {
      myModuleView.showInfo(
        document.querySelector('input[name="name"]'),
        document.querySelector('input[name="surname"]'),
        document.querySelector('input[name="email"]')
      );
    };

    this.changeInfo = function (
      nameInput,
      surnameInput,
      errorName,
      errorSurname
    ) {
      let btn = document.getElementById("profile__change-info");

      if (btn.textContent === "Изменить данные") {
        myModuleView.btnReadOnly(nameInput, surnameInput, btn);
      } else if (btn.textContent === "Сохранить") {
        const errors = {
          errorName: "",
          errorSurname: "",
        };

        if (!nameInput.value) {
          errors.errorName = "Введите имя";
        } else {
          errors.errorName = "";
        }
        if (!surnameInput.value) {
          errors.errorSurname = "Введите фамилию";
        } else {
          errors.errorSurname = "";
        }

        if (errors.errorName === "" && errors.errorSurname === "") {
          errorName.innerHTML = "";
          errorSurname.innerHTML = "";

          updateDoc(
            doc(db, "users", JSON.parse(localStorage.getItem("user")).id),
            {
              name: nameInput.value,
              surname: surnameInput.value,
            }
          ).then(() => {
            let currentUser = JSON.parse(localStorage.getItem("user"));
            currentUser.name = nameInput.value;
            currentUser.surname = surnameInput.value;
            localStorage.setItem("user", JSON.stringify(currentUser));
            myModuleView.btnReadOnly(nameInput, surnameInput, btn);
          });
        } else {
          errorName.innerHTML = errors.errorName;
          errorSurname.innerHTML = errors.errorSurname;
        }
      }
    };

    this.signOut = function () {
      localStorage.removeItem("user");
      window.location.hash = "authorization";
    };

    this.deleteUser = function () {
      deleteDoc(
        doc(db, "users", JSON.parse(localStorage.getItem("user")).id)
      ).then(() => {
        deleteDoc(
          doc(db, "usersWords", JSON.parse(localStorage.getItem("user")).id)
        ).then(() => {
          deleteObject(
            ref(
              storage,
              `images/${JSON.parse(localStorage.getItem("user")).id}`
            )
          ).then(() => {
            localStorage.removeItem("user");
            window.location.hash = "authorization";
          });
        });
      });
    };

    this.showModal = function () {
      myModuleView.showModal(document.querySelector("dialog"));
    };

    this.closeModal = function () {
      myModuleView.closeModal(document.querySelector("dialog"));
    };

    this.updatePassword = function () {
      let errors = {
        currentPasswordError: "",
        newPasswordError: "",
      };

      let values = {
        currentPassword: document.querySelector('input[name="currentPassword"]')
          .value,
        newPassword: document.querySelector('input[name="newPassword"]').value,
      };

      const password_pattern =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

      if (values.currentPassword === "") {
        errors.currentPasswordError = "Введите старый пароль";
      } else if (
        values.currentPassword.toString() !==
        JSON.parse(localStorage.getItem("user")).password
      ) {
        errors.currentPasswordError = "Неверный пароль";
      } else {
        errors.currentPasswordError = "";
      }

      if (values.newPassword === "") {
        errors.newPasswordError = "Введите новый пароль";
      } else if (!password_pattern.test(values.newPassword)) {
        errors.newPasswordError = "Пароль не соответствует";
      } else if (values.newPassword === values.currentPassword) {
        errors.newPasswordError = "Новый пароль должен быть другим";
      } else {
        errors.newPasswordError = "";
      }

      if (
        errors.currentPasswordError === "" &&
        errors.newPasswordError === ""
      ) {
        updateDoc(
          doc(db, "users", JSON.parse(localStorage.getItem("user")).id),
          {
            password: values.newPassword,
          }
        ).then(() => {
          let currentUser = JSON.parse(localStorage.getItem("user"));
          currentUser.password = values.newPassword;
          localStorage.setItem("user", JSON.stringify(currentUser));
          myModuleView.closeModal(document.querySelector("dialog"));
        });
      } else {
        myModuleView.showPasswordsError(
          errors,
          document.querySelector(".modal__error-current"),
          document.querySelector(".modal__error-new")
        );
      }
    };

    this.addWords = function () {
      const cards = document.querySelector(".dictionary__cards");

      getDocs(collection(db, "words")).then((docs) => {
        const words = [];
        docs.docs.forEach((doc) => words.push(doc.data()));
        words.sort((a, b) => {
          return a.word < b.word ? -1 : a.word > b.word ? 1 : 0;
        });
        words.forEach((word) => {
          myModuleView.renderWords(word, cards);
        });
      });
    };

    this.displayCardOverlay = function (card) {
      myModuleView.displayCardOverlay(
        card.querySelector(".dictionary__card-overlay")
      );
    };

    this.addFavoriteWord = function (card) {
      updateDoc(
        doc(db, "usersWords", JSON.parse(localStorage.getItem("user")).id),
        {
          words: arrayUnion(card.querySelector("input").getAttribute("name")),
        }
      );
    };

    this.addFavoriteWords = async function () {
      const cards = document.querySelector(".dictionary__cards");
      const docSnap = await getDoc(
        doc(db, "usersWords", JSON.parse(localStorage.getItem("user")).id)
      );
      const words = docSnap
        .data()
        .words.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
      cards.innerHTML = "";
      words.forEach((word) => {
        getDocs(query(collection(db, "words"), where("word", "==", word))).then(
          (data) => {
            myModuleView.renderFavoriteWords(cards, data.docs[0].data());
          }
        );
      });
    };

    this.deleteFavoriteWord = function (input) {
      updateDoc(
        doc(db, "usersWords", JSON.parse(localStorage.getItem("user")).id),
        {
          words: arrayRemove(input.getAttribute("name")),
        }
      );
      this.addFavoriteWords();
    };

    this.addCategoryWords = function (category) {
      window.location.hash = "#category";
      myModuleView.renderContent("#category");

      getDocs(
        query(collection(db, "words"), where("category", "==", category))
      ).then((docs) => {
        const cards = document.querySelector(".dictionary__cards");

        const words = [];
        docs.docs.forEach((doc) => words.push(doc.data()));
        words.sort((a, b) => {
          return a.word < b.word ? -1 : a.word > b.word ? 1 : 0;
        });

        words.forEach((word) => {
          myModuleView.renderCategoryWords(word, cards);
        });
      });
    };
  }
  /* -------- end model -------- */

  /* ----- begin controller ---- */
  function ModuleController() {
    let myModuleContainer = null;
    let myModuleModel = null;

    this.init = function (root, model) {
      myModuleContainer = root;
      myModuleModel = model;

      window.addEventListener("hashchange", this.updateState);

      this.updateState();
      this.addEventListeners();
    };

    this.updateState = function () {
      const hashPageName = location.hash.slice(1).toLowerCase();
      myModuleModel.updateState(hashPageName);
    };

    this.addEventListeners = function () {
      myModuleContainer.addEventListener("click", function (event) {
        if (
          event.target &&
          event.target.matches(".authorization__overlay-ghost")
        ) {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.rightPanel(
            document.querySelector(".authorization__container")
          );
        }

        if (event.target && event.target.id === "sign-up") {
          event.preventDefault();
          event.stopPropagation();

          const hash = event.target.getAttribute("href");
          const hashPageName = hash.slice(1).toLowerCase();

          const signUpValues = {
            surname: document.getElementById("sign-up__surname").value,
            name: document.getElementById("sign-up__name").value,
            email: document.getElementById("sign-up__email").value,
            password: document.getElementById("sign-up__password").value,
          };

          myModuleModel.createUser(signUpValues, hashPageName);
        }

        if (event.target && event.target.id === "sign-in") {
          event.preventDefault();
          event.stopPropagation();

          const hash = event.target.getAttribute("href");
          const hashPageName = hash.slice(1).toLowerCase();

          const signInValues = {
            email: document.getElementById("sign-in__email").value,
            password: document.getElementById("sign-in__password").value,
          };

          myModuleModel.signIn(signInValues, hashPageName);
        }

        if (event.target && event.target.matches(".word-listen")) {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.voice(event.target.previousElementSibling);
        }

        if (event.target && event.target.matches(".task__check")) {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.checkCheckbox(event.target);
        }

        if (event.target && event.target.id === "profile__change-info") {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.changeInfo(
            document.querySelector('input[name="name"]'),
            document.querySelector('input[name="surname"]'),
            document.querySelector(".profile__error-name"),
            document.querySelector(".profile__error-surname")
          );
        }

        if (event.target && event.target.id === "profile__leave") {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.signOut();
        }

        if (event.target && event.target.id === "profile__delete") {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.deleteUser();
        }

        if (event.target && event.target.id === "profile__change-password") {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.showModal();
        }

        if (event.target && event.target.matches(".modal__close")) {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.closeModal();
        }

        if (event.target && event.target.matches(".modal__button")) {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.updatePassword();
        }

        if (
          event.target &&
          event.target.matches(".dictionary__card-right-more")
        ) {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.displayCardOverlay(
            event.target.closest(".dictionary__card")
          );
        }

        if (
          event.target &&
          (event.target.matches(".dictionary__card-right-button") ||
            event.target.matches(".dictionary__card-right-image"))
        ) {
          event.preventDefault();
          event.stopPropagation();

          const card = event.target.closest(".dictionary__card");

          myModuleModel.voice(card.querySelector(".dictionary__card-word"));
        }

        if (
          event.target &&
          event.target.matches(".dictionary__card-favorite-label")
        ) {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.addFavoriteWord(
            event.target.closest(".dictionary__card")
          );
        }

        if (event.target && event.target.matches(".dictionary__card-delete")) {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.deleteFavoriteWord(
            event.target.querySelector(".dictionary__card-delete-input")
          );
        }

        if (event.target && event.target.matches(".categories__button")) {
          event.preventDefault();
          event.stopPropagation();

          myModuleModel.addCategoryWords(event.target.id);
        }
      });

      myModuleContainer.addEventListener("change", function (event) {
        if (event.target && event.target.matches(".checkbox-input")) {
          myModuleModel.disabledBtn(document.querySelector(".task__check"));
        }

        if (event.target && event.target.matches(".rating__input")) {
          myModuleModel.updateRating(event.target.id);
        }

        if (event.target && event.target.id === "vibration") {
          myModuleModel.updateVibration();
        }

        if (event.target && event.target.id === "file") {
          myModuleModel.changePhoto(event.target.files[0]);
        }
      });
    };
  }
  /* ------ end controller ----- */

  return {
    init: function (root, routes, components) {
      this.renderComponents(root, components);

      const view = new ModuleView();
      const model = new ModuleModel();
      const controller = new ModuleController();

      view.init(document.getElementById(root), routes);
      model.init(view);
      controller.init(document.getElementById(root), model);
    },

    renderComponents: function (root, components) {
      const container = document.getElementById(root);

      for (let item in components) {
        if (components.hasOwnProperty(item)) {
          container.innerHTML += components[item].render();
        }
      }
    },
  };
})();
/* ------ end app module ----- */

/*** --- init module --- ***/
mySPA.init("root", routes, components);
