'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////Lecture////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Selecting the entire page//////////////////////////////////////////////////////////////////////////////////////////
console.log(document.documentElement); //..documentElement
//Selecting the Head
console.log(document.head);
//Selecting the body
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));
//////////////////////////////////////////Creating and inserting elements///////////////////////////////////////////////
const message = document.createElement('div'); //created a div
message.classList.add('cookie-message'); //added cookie-meesgae style to it
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
//Now inserting it into our DOM

//prepand and append are use to move the HTML element start or to end . And it should not in two places like humanbeings

header.prepend(message); //prepend added the element to the start of the selection
header.append(message); //prepend added the element to the end of the selection

//if you want to put in 2 places you can use
header.prepend(message.cloneNode(true)); //it will create a copy of message at the start

//BEFORE AND AFTER
header.before(message); //put the message before the header element as a siblings
header.after(message); //put the message after the header element as a siblings

//DeLETING ELEMENT
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    console.log('Button is clicked');
    // message.remove();
    message.parentElement.removeChild(message);
  });
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
