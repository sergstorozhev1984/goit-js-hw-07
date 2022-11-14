import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const refs = {
    galleryEl: document.querySelector('.gallery'),
    
}

function createGalleryListElMarcup(galleryItems) {
    let galleryListEl = galleryItems.map(el => `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
        loading="lazy"
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`).join('');
    refs.galleryEl.innerHTML = galleryListEl;
}
createGalleryListElMarcup(galleryItems);

refs.galleryEl.addEventListener('click', onClickImg);

function onClickImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") { 
        return; 
    }
    const instance = basicLightbox.create(`
	<img src="${e.target.dataset.source}" width="800" height="600">
    `, {
	closable: false
    });
    instance.show()
    window.addEventListener('keydown', e => {
        if (e.code === "Escape") {
            instance.close();
        }
    });
    const divLightboxEl = document.querySelector('.basicLightbox')
    divLightboxEl.addEventListener('click', e => {
        console.log(e.target);
        if (e.currentTarget === e.target) {
        instance.close();
        }
    });  
}

