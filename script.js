'use strict';

var items = document.querySelectorAll('.list-items');
var modal = document.querySelector('#modal');
var firstPage = document.querySelector('.first-page');
var secondPage = document.querySelector('.second-page');
var button = document.querySelector('.button');
var numberInstagram = document.querySelector('#numberInstagram');
var numberFacebook = document.querySelector('#numberFacebook');
var numberGoogle = document.querySelector('#numberGoogle');
var numberZpolecenia = document.querySelector('#numberZpolecenia');
var numberInne = document.querySelector('#numberInne');

if (localStorage.getItem('Instagram') || localStorage.getItem('Facebook') || localStorage.getItem('Google') || localStorage.getItem('Z polecenia') || localStorage.getItem('Inne')) {
  numberInstagram.innerHTML = localStorage.getItem('Instagram');
  numberFacebook.innerHTML = localStorage.getItem('Facebook');
  numberGoogle.innerHTML = localStorage.getItem('Google');
  numberZpolecenia.innerHTML = localStorage.getItem('Z polecenia');
  numberInne.innerHTML = localStorage.getItem('Inne');
} else {
  localStorage.setItem('Instagram', numberInstagram.dataset.number);
  localStorage.setItem('Facebook', numberFacebook.dataset.number);
  localStorage.setItem('Google', numberGoogle.dataset.number);
  localStorage.setItem('Z polecenia', numberZpolecenia.dataset.number);
  localStorage.setItem('Inne', numberInne.dataset.number);
  numberInstagram.innerHTML = localStorage.getItem('Instagram');
  numberFacebook.innerHTML = localStorage.getItem('Facebook');
  numberGoogle.innerHTML = localStorage.getItem('Google');
  numberZpolecenia.innerHTML = localStorage.getItem('Z polecenia');
  numberInne.innerHTML = localStorage.getItem('Inne');
}

items.forEach(function (item) {
  item.addEventListener('click', function () {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);

      if (key === item.dataset.name) {
        var number = +localStorage.getItem(key);
        ++number;
        localStorage.setItem(key, number);
        numberInstagram.innerHTML = localStorage.getItem('Instagram');
        numberFacebook.innerHTML = localStorage.getItem('Facebook');
        numberGoogle.innerHTML = localStorage.getItem('Google');
        numberZpolecenia.innerHTML = localStorage.getItem('Z polecenia');
        numberInne.innerHTML = localStorage.getItem('Inne');
      }
    }

    setTimeout(function () {
      button.classList.add('disabled');
      firstPage.classList.add('disabled');
      modal.classList.remove('disabled');
      setTimeout(function () {
        button.classList.remove('disabled');
        firstPage.classList.remove('disabled');
        modal.classList.add('disabled');
      }, 5000);
    }, 100);
  });
});

var showSecondPage = function showSecondPage() {
  button.classList.add('red');
  firstPage.classList.add('disabled');
  secondPage.classList.remove('disabled');
  button.innerHTML = 'BACK';
  button.removeEventListener('click', showSecondPage);
  button.addEventListener('click', showFirstPage);
};

var showFirstPage = function showFirstPage() {
  button.classList.remove('red');
  firstPage.classList.remove('disabled');
  secondPage.classList.add('disabled');
  button.innerHTML = 'INFO';
  button.addEventListener('click', showSecondPage);
  button.removeEventListener('click', showFirstPage);
};

button.addEventListener('click', showSecondPage);