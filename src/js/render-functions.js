import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderPage(data) {
  const gallery = document.querySelector('.gallery');

  const galleryMarkup = data.hits
    .map(
      ({ largeImageURL, webformatURL, tags }) =>
        `
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"     
      alt="${tags}"
    />
  </a>
</li>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('afterbegin', galleryMarkup);
  console.log(data.hits);
}

export function loader() {}
