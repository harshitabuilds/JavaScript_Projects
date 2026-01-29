'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// const openModal =function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   };  //openModal this function can be used in the below loop in openmodal

for (let i = 0; i < btnsOpenModal.length; i++) {
  //   console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', function () {
    // console.log('btn clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  //   btnCloseModal.addEventListener('click', function () {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //   });

  //   overlay.addEventListener('click', function () {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //   });

  btnCloseModal.addEventListener('click', closeModal); // we don't use closeModal() as it won't work call it call the function as js load but we want it to happen only when the click happens.
  overlay.addEventListener('click', closeModal);

  /*  document.addEventListener('keydown', function (e) {
    console.log(e); // here e can be anything because it represents a variable as event which signifies as eventObject to the certain event listener called for now it's keyboard.
  console.log(e.key);//which key was clicked
    });
    */
  document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal(); // we call this function so we use ()
    }
  });
}
