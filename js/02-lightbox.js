import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryCont = document.querySelector(".gallery");
const galleryList = document.createElement("ul");
galleryList.classList.add("gallery");

let galleryString = "";
for (const item of galleryItems) {
  const { preview, original, description } = item;
  galleryString =
    galleryString +
    `<li class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img class="gallery__img" src=${preview} alt=${description} width="372" height="240">
      </a>
    </li>`;
}
galleryList.insertAdjacentHTML("beforeend", galleryString);
galleryCont.append(galleryList);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox');

//? це версія personal