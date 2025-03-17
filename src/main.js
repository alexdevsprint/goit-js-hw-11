import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getData from './js/pixabay-api';
import { renderPage } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', findImage);

function findImage(event) {
  event.preventDefault();
  const searchName = form.elements['search-text'].value;
  getData(searchName)
    .then(data => {
      renderPage(data);
    })
    .catch(error => {
      console.error(error);
      s;
    });
}
