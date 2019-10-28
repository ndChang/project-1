const carouselSlide = document.querySelector(".listing-container");
const carouselImages = document.querySelectorAll(".listing-container .card");

//Button
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

//counter
let counter = 0;
const size = carouselImages[0].clientWidth;
const shift = -size * counter;

// carouselSlide.style.transform = "translateX(" + shift + "px)";

/////////////////////////////////////////////
/////////////Event Listeners////////////////
///////////////////////////////////////////

//Event check on buttons to transition to next slide
//If new slide is last of array, slide will reset to first element... Only works when both first and last element are the same

// nextBtn.addEventListener("click", () => {
//   if (counter >= carouselImages.length - 1) return;
//   carouselSlide.style.transition = "transfrom 0.4s ease-in-out";
//   counter++;
//   carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
// });

// prevBtn.addEventListener("click", () => {
//   if (counter <= 0) return;
//   carouselSlide.style.transition = "transfrom 0.4s ease-in-out";
//   counter--;
//   carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
// });

// function transitioncards() {
//     carouselSlide.style.transition = "transfrom 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = "translateX(" + -size * counter + "px)"
// }
// transitioncards();