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
  if (item.addEventListener) {
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
      }, 4000);
    }, 100);
  });
} else if (item.attachEvent) {
  item.attachEvent('onclick', function () {
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
}
});

var showSecondPage = function showSecondPage() {
  button.classList.add('red');
  firstPage.classList.add('disabled');
  secondPage.classList.remove('disabled');
  button.innerHTML = 'BACK';

  if (button.removeEventListener) {
    button.removeEventListener('click', showSecondPage);
  } else if (button.detachEvent) {
    button.detachEvent('onclick', showSecondPage)
  }

    if (button.addEventListener) {
      button.addEventListener('click', showFirstPage);
    } else if (button.attachEvent) {
    button.attachEvent("onclick", showFirstPage)
  }

};

var showFirstPage = function showFirstPage() {
  button.classList.remove('red');
  firstPage.classList.remove('disabled');
  secondPage.classList.add('disabled');
  button.innerHTML = 'INFO';

  if (button.addEventListener) {
    button.addEventListener('click', showSecondPage);
  } else if (button.attachEvent) {
  button.attachEvent("onclick", showSecondPage)
}

  if (button.removeEventListener) {
    button.removeEventListener('click', showFirstPage);
  } else if (button.detachEvent) {
    button.detachEvent('onclick', showFirstPage)
  }

};

if (button.addEventListener) {
  button.addEventListener('click', showSecondPage);
} else if (button.attachEvent) {
  button.attachEvent("onclick", showSecondPage)
}