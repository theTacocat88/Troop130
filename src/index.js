const leftGalleryButton = document.getElementById("left-button-gallery");
const rightGalleryButton = document.getElementById("right-button-gallery");
const galleryItemOne = document.getElementById("gallery-item-one");
const galleryItemTwo = document.getElementById("gallery-item-two");
const galleryItemThree = document.getElementById("gallery-item-three");

function addEventListeners() {
    rightGalleryButton.addEventListener("click", rightGalleryButtonClicked);
    leftGalleryButton.addEventListener("click", leftGalleryButtonClicked);
}

function rightGalleryButtonClicked() {
  leftGalleryButton.innerHTML = "<p>right</p>";
}

function leftGalleryButtonClicked() {
  rightGalleryButton.innerHTML = "<p>left</p>";
}

addEventListeners();