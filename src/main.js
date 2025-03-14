import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getData from './js/pixabay-api';

const form = document.querySelector('.form');

form.addEventListener('submit', findImage);

const searchName = 'cat';

function findImage(event) {
    event.preventDefault();
    getData(searchName).then(data => {
        console.log(data); 
    })
    .catch (error => {
        console.error(error);
    });
}
