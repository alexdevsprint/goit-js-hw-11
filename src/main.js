import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getData from './js/pixabay-api';
import { renderPage,clearGallary } from './js/render-functions';

const form = document.querySelector('.form');
const showLoader = document.querySelector('.loader');
form.addEventListener('submit', findImage);

function findImage(event) {
  event.preventDefault();    
  const searchName = form.elements['search-text'].value.toLowerCase().trim();

  clearGallary();
  
  if (searchName === '') {
    iziToast.error({
      title: 'Error',
      message: 'You should enter text to search!',
    });
  } else {
    showLoader.classList.remove('hidden')  
    getData(searchName)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        } else {
          renderPage(data);
        }
      })
      .catch(() => {
        iziToast.error({
          title: 'Error',
          message:
            'Something wrong, try again later!',
        });
      })
      .finally(() => {        
        showLoader.classList.add('hidden');
      });
  }
  form.reset();  
}
