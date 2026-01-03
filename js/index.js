const leftGalleryButton = document.getElementById("left-button-gallery");
const rightGalleryButton = document.getElementById("right-button-gallery");
const galleryItem = document.getElementById("gallery-item");

var gallery = [
  "<img src='https://placehold.co/900x600?text=Placeholder+1' loading='eager' alt='1'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+2' loading='eager' alt='2'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+3' loading='eager' alt='3'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+4' loading='eager' alt='4'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+5' loading='eager' alt='5'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+6' loading='eager' alt='6'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+7' loading='eager' alt='7'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+8' loading='eager' alt='8'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+9' loading='eager' alt='9'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+10' loading='eager' alt='10'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+11' loading='eager' alt='11'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+12' loading='eager' alt='12'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+13' loading='eager' alt='13'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+14' loading='eager' alt='14'/>",
  "<img src='https://placehold.co/900x600?text=Placeholder+15' loading='eager' alt='15'/>"
];

function addEventListeners() {
    rightGalleryButton.addEventListener("click", rightGalleryButtonClicked);
    leftGalleryButton.addEventListener("click", leftGalleryButtonClicked);
}

function rightGalleryButtonClicked() {
  galleryItem.innerHTML = gallery[index + 1];
  index++;
  if (index >= gallery.length) {
    galleryItem.innerHTML = gallery[0];
    index = 0;
  }
}

function leftGalleryButtonClicked() {
  galleryItem.innerHTML = gallery[index - 1];
  index--;
  if (index < 0) {
    galleryItem.innerHTML = gallery[gallery.length - 1];
    index = gallery.length - 1;
  }
}

galleryItem.innerHTML = gallery[0];
var index = 0;

addEventListeners();