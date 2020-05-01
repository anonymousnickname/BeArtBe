'use strict'

const items = document.querySelectorAll('.list-items');
const modal = document.querySelector('#modal');
const firstPage = document.querySelector('.first-page');
const secondPage = document.querySelector('.second-page');
const button = document.querySelector('.button');
const numberInstagram = document.querySelector('#numberInstagram');
const numberFacebook = document.querySelector('#numberFacebook');
const numberGoogle = document.querySelector('#numberGoogle');
const numberZpolecenia = document.querySelector('#numberZpolecenia');
const numberInne = document.querySelector('#numberInne');

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

items.forEach((item) => {
    item.addEventListener('click', () => {
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key === item.dataset.name) {
                let number = +localStorage.getItem(key);
                ++number;
                localStorage.setItem(key,number);
                numberInstagram.innerHTML = localStorage.getItem('Instagram');
                numberFacebook.innerHTML = localStorage.getItem('Facebook');
                numberGoogle.innerHTML = localStorage.getItem('Google');
                numberZpolecenia.innerHTML = localStorage.getItem('Z polecenia');
                numberInne.innerHTML = localStorage.getItem('Inne');
            }
          }
         setTimeout(() => {
            button.classList.add('disabled')
            firstPage.classList.add('disabled');
            modal.classList.remove('disabled');
                setTimeout(() => {
                button.classList.remove('disabled')
                firstPage.classList.remove('disabled');
                modal.classList.add('disabled');
            }, 5000)
          }, 100)
    })
})

const showSecondPage = () => {
    button.classList.add('red')
    firstPage.classList.add('disabled');
    secondPage.classList.remove('disabled');
    button.innerHTML = 'BACK'

    button.removeEventListener('click', showSecondPage);

    button.addEventListener('click', showFirstPage);
}

const showFirstPage = () => {
    button.classList.remove('red')
    firstPage.classList.remove('disabled');
    secondPage.classList.add('disabled');
    button.innerHTML = 'INFO'

    button.addEventListener('click', showSecondPage);

    button.removeEventListener('click', showFirstPage);
}

button.addEventListener('click', showSecondPage);