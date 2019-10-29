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

//Two Coloumn selector
const twoColumnRow = document.querySelectorAll(".wrapper")[31];

//Populate Two Column
const cardGenerator = function(location, index) {
  let card = document.createElement("div");
  card.classList.add("wrapper", "card", "small-location");
  card.appendChild(photos[index]);
  let locationName = document.createElement("h4");
  locationName.innerHTML = locations[index];
  card.appendChild(locationName);
  let price = document.createElement("h4");
  price.innerHTML = `$${priceGenerator()}/night`
  price.style.color ="green"
  card.appendChild(price)
  location.appendChild(card);
};

//Random Number Generator
const priceGenerator = () => {return Math.random().toFixed(2) * 100 +30};

for (let i = 0; i < photos.length; i++) {
  cardGenerator(twoColumnRow, i);
}

}
onReady()