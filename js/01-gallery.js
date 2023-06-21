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
    `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__img" src=${preview} data-source=${original} alt=${description} width="372" height="240"></a></li>`;
}
galleryList.insertAdjacentHTML("beforeend", galleryString);
galleryDiv.append(galleryList);

function makemodal(evt) {
  evt.preventDefault();
  if (evt.target !== evt.currentTarget) {
    const bigimg = evt.target.dataset.source
    const instance = basicLightbox.create(`<div class="modal"><img class='gallery__image' src=${bigimg}></div>`);
    instance.show()
  } else {
    return;
  }
}
galleryDiv.addEventListener("click", makemodal);

// galleryDiv.addEventListener("click", (evt)=>{
//   evt.preventDefault(); 
//   if (evt.target !== evt.currentTarget) {
//     const bigimg = evt.target.dataset.source
//     const instance = basicLightbox.create(`<div class="modal"><img class='gallery__image' src=${bigimg}></div>`);
//     // instance
//     instance.show();
    
//   } else {
//     return;
//   }
// });

//TODO----Tests

// const bodycont = document.querySelector('body');
// modalEl.addEventListener('click', (evt)=>{
  // if (evt.target.classList.contains('modal')){
    // evt.target.innerHTML('')
  // }
// })

// const modalDiv = document.querySelector('.basic-Lightbox');
// modalDiv.addEventListener('click', (evt)=>{
//   if (evt.target.classList.contains('modal')){
//     evt.currentTarget.innerHTML('')
//   }
// })

//<a id="testLink" href="">dkfvjhbefu</a>
// const lin = document.querySelector("#testLink");
// lin.addEventListener("click", evt => {
//   evt.preventDefault();
//   console.log(evt.currentTarget);
// });