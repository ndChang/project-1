
//Object Constructor
const Bungalow = function(name, photo) {
  (this.name = name), (this.photo = photo);
};
// //Object Container
// const bungalowArray = [];

// //Populate Container
// for (let i = 0; i < 8; i++) {
//   bungalowArray[i] = new Bungalow("", "");
// }

// //Set object images
// for (let i = 2; i < 8; i++) {
//   let image = document.createElement("img");
//   image.setAttribute("src", `../images/${i}.jpg`);
//   bungalowArray[i].photo = image;
// }

// //Names list
const locations = [
  "Australia",
  "Hawaii",
  "Guam",
  "Costa Rica",
  "Spain",
  "Neatherlands",
  "Germany",
  "Madagascar",
  "Greece",
  "Panama",
  "Chile",
  "South Korea",
  "Japan",
  "India",
  "South Africa",
  "United States"
];


// //Set Object name
// for (let i = 0; i < 8; i++) {
//   bungalowArray[i].name = locations[i];
// }


// //Generate random bumber
const priceGenerator = () => {
  return Math.random().toFixed(2) * 100 + 30;
};
// //Set object price
// for (let i = 0; i < bungalowArray.length; i++) {
//   bungalowArray[i].price = "$" + priceGenerator();
// }

// //Generate && set Object food
// for (let i = 0; i < 8; i++) {
//   let image = document.createElement("img");
//   image.setAttribute("src", `../images/food/${i}.jpg`);
//   bungalowArray[i].foods = image;
// }

const newBungalowArray = []
for(let i = 0; i < 8; i++){
  newBungalowArray[i] = new Bungalow("", "");
  newBungalowArray[i].price = "$" + priceGenerator();
  let image = document.createElement("img");
  image.setAttribute("src", `../images/food/${i}.jpg`);
  newBungalowArray[i].foods = image;
  let food = document.createElement("img");
  food.setAttribute("src", `../images/${i}.jpg`);
  newBungalowArray[i].photo = food;
}

console.log(newBungalowArray)

const createCarousel = function (classNamesContainer, classNamesSlider){
  let carouselContainer = document.createElement("div");
  carouselContainer.classList.add(classNamesContainer);
  let carouselSlider = document.createElement("div");
  carouselSlider.classList.add(classNamesSlider);
  carouselContainer.appendChild(carouselSlider);
}

let array1 = ["wrapper", "apple", "jackfruit"]
let array2 = ["bengal", "cat", "reduced-size"]
