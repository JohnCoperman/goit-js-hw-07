import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryCont = document.querySelector(".container");
const galleryList = document.createElement("ul");
galleryList.classList.add("gallery");

let galleryString = "";
for (const item of galleryItems) {
  const { preview, original, description } = item;
  galleryString =
    galleryString +
    `<li class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img class="gallery__img" src=${preview} data-source=${original} alt=${description} width="372" height="240">
      </a>
    </li>`;
}
galleryList.insertAdjacentHTML("beforeend", galleryString);
galleryCont.append(galleryList);

function modalwindow(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('gallery__img')) {
    const bigimg = evt.target.dataset.source;
    const modalfull = basicLightbox.create(`<div class="modal"><img class='gallery__image' src=${bigimg}></div>`, {closable: false});
    modalfull.show();

    function closeOnKey(evt) {
      if (evt.code === 'Escape') {
        modalfull.close();
        this.removeEventListener('mousedown', closeOnClick);
      }
      this.removeEventListener('keydown', closeOnKey);
    };

    function closeOnClick() {
      modalfull.close();
      this.removeEventListener('mousedown', closeOnClick);
      this.removeEventListener('keydown', closeOnKey);
    };
    window.addEventListener('keydown', closeOnKey);
    window.addEventListener('mousedown', closeOnClick);
  } else {
    return;
  };
}

galleryList.addEventListener("click", modalwindow);
