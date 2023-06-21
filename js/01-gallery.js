import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryDiv = document.querySelector("div");
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
galleryDiv.append(galleryList);

function makemodal(evt) {
  evt.preventDefault();
  if (evt.target !== evt.currentTarget) {
    const bigimg = evt.target.dataset.source
    const modalfull = basicLightbox.create(`<div class="modal"><img class='gallery__image' src=${bigimg}></div>`);
    modalfull.show()
    
    window.addEventListener('keydown', (evt)=>{
      if (evt.code === 'Escape') {
        modalfull.close();
      }
    })
    //TODO ::
    // window.addEventListener('click', (evt)=>{
    //   if (evt.target.parentNode.classList.contains('gallery__image')) {
    //     modalfull.close();
    //   }
    // }) 
  } else {
    return;
  }
}
galleryDiv.addEventListener("click", makemodal);
