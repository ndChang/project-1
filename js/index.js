function onReady() {
//////////////////////////////////////////////////
////////////////////Login functionality///////////
//////////////////////////////////////////////////

const loginButton = document.querySelectorAll(".login-submit")[0];

// const loginCheck = event => {
//   console.log("fired");
//   const username = document.querySelectorAll("input")[0].value;
//   const password = document.querySelectorAll("input")[1].value;
//   event.preventDefault();
//   if (username == "") {
//     console.log("check username");
//   } else if (password == "") {
//     console.log("check username");
//   } else {
//     location.replace("index.html");
//   }
// };

// loginButton.addEventListener("click", loginCheck);

//Array for photos
const photos = [];
const foods = [];

//Array for locations
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



//Scan through image folder && populates photos array
for (let i = 2; i <= 15; i++) {
  let image = document.createElement("img");
  image.setAttribute("src", `../images/${i}.jpg`);
  photos.push(image);
}

photos[0].location = locations[0]
console.log(Object.keys(photos[0])) 


for (let i = 0; i < 13; i++){
    let image = document.createElement("img");
    image.setAttribute("src", `../images/food/${i}.jpg`)
    foods.push(image)
}

//Two Coloumn selector
const twoColumnRow = document.querySelectorAll(".carousel-slider")[1];
const foodColumn = document.querySelectorAll(".carousel-slider")[2];

//Populate Two Column
const cardGenerator = function(location, index, imageLocation,className) {
  let card = document.createElement("div");
  card.classList.add("wrapper", "card", className);
  let image = imageLocation[index];
  image.style.display= "block";
  card.appendChild(image);
  let locationName = document.createElement("h4");
  locationName.innerHTML = locations[index];
  card.appendChild(locationName);
  let price = document.createElement("p");
  price.innerHTML = `Average $${priceGenerator()}/night`
  price.style.color ="green"
  card.appendChild(price)
  location.appendChild(card);
};

//Footer Generator
const footerGenerator = () => {
  let footer = document.createElement("footer");
  footer.style.bottom = 0;
  footer.style.width = "100vw";
  footer.style.height = "200px";
  footer.style.position = "relative";
  footer.style.background ="black"
  // document.body.appendChild(footer)
}


//Random Number Generator
const priceGenerator = () => {return Math.random().toFixed(2) * 100 +30};

for (let i = 0; i < photos.length; i++) {
  cardGenerator(twoColumnRow, i, photos,"small-location");
}

for(let i = 0; i < foods.length; i++){
    cardGenerator(foodColumn, i, foods, "large-food")
}

footerGenerator()
}
onReady()