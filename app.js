"use strict";

const leftArrow = document.querySelector(".fa-arrow-circle-left");
const rightArrow = document.querySelector(".fa-arrow-circle-right");
const photosContainer = document.querySelector(".photos-container");
const photos = document.querySelectorAll(".photos");

photos.forEach(
  (photo, index) => (photo.style.transform = `translateX(${100 * index}%)`)
);

let curPhoto = 0;
const maxPhoto = photos.length;

const displayPhoto = (photo) => {
  photos.forEach((photo, index) => {
    if (curPhoto) photo.classList.remove("hidden");
    else photo.classList.add("hidden");
  });
};

const slideToPhoto = (photo) => {
  photos.forEach(
    (photo, index) =>
      (photo.style.transform = `translateX(${100 * (index - curPhoto)}%)`)
  );
};

slideToPhoto(0);

const nextPhoto = () => {
  if (curPhoto === maxPhoto - 1) {
    curPhoto = 0;
  } else {
    curPhoto++;
  }
  slideToPhoto(curPhoto);
};

const prevPhoto = () => {
  if (curPhoto === 0) {
    curPhoto = maxPhoto - 1;
  } else {
    curPhoto--;
  }
  slideToPhoto(curPhoto);
};

rightArrow.addEventListener("click", nextPhoto);

leftArrow.addEventListener("click", prevPhoto);
