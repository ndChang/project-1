function onReady() {
  /////////////LOCAL STORAGE///////////////////////
  let myStorage = window.localStorage;
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

  const Bungalow = function(name, photo, price, food, text) {
    (this.name = name),
      (this.photo = photo),
      (this.price = price),
      (this.food = food),
      (this.text = text);
  };
  //Random Number Generator
  const priceGenerator = () => {
    return Math.random().toFixed(2) * 100 + 30;
  };

  //Scan through image folder && populates photos array
  for (let i = 2; i <= 15; i++) {
    photos.push(`../images/${i}.jpg`);
  }

  for (let i = 0; i < 13; i++) {
    foods.push(`../images/food/${i}.jpg`);
  }

  //Create object
  const bungalows = [];
  for (let i = 0; i < 13; i++) {
    let listing = new Bungalow(
      locations[i],
      photos[i],
      `Average $${priceGenerator()}/night`,
      foods[i],
      "Available"
    );
    bungalows.push(listing);
  }
  //Two Coloumn selector
  const twoColumnRow = document.querySelectorAll(".carousel-slider")[1];
  const foodColumn = document.querySelectorAll(".carousel-slider")[2];
  //Carousol generator

  const prototypeGenerator = function(location, bungalows, index, key) {
    let card = document.createElement("div");
    card.classList.add("wrapper", "card");

    let image = document.createElement("img");
    image.setAttribute("src", bungalows[index][key]);
    card.append(image);

    let hostInformation = document.createElement("div");
    hostInformation.classList.add("wrapper", "space");
    let roomInformation = document.createElement("div");
    roomInformation.classList.add("wrapper", "reservation");
    let occupancy = document.createElement("span");
    occupancy.classList.add("occupancy");
    occupancy.innerText = "ENTIRE BUNGALOW";
    roomInformation.append(occupancy);
    let rating = document.createElement("span");
    rating.classList.add("rating");
    rating.innerHTML = "Rating 4.76";
    roomInformation.append(rating);

    // PRICE
    let roomPrice = document.createElement("price");
    roomPrice.classList.add("price");
    roomPrice.innerHTML = bungalows[index].price;
    roomPrice.style.color = "green";
    roomInformation.append(roomPrice);
    hostInformation.append(roomInformation);
    let confirmation = document.createElement("button");
    confirmation.classList.add("bookBtn");
    confirmation.innerHTML = "Book";
    hostInformation.append(confirmation);
    card.append(hostInformation);
    let writeUp = document.createElement("div");

    location.append(card);
  };
  for (let i = 6; i < 13; i++) {
    const location = document.querySelectorAll(".carousel-slider")[0];
    prototypeGenerator(location, bungalows, i, "photo");
  }
  //Populate Two Column
  const cardGenerator = function(location, bungalows, index, key, className) {
    let card = document.createElement("div");
    card.classList.add("wrapper", "card", className);

    let image = document.createElement("img");
    image.setAttribute("src", bungalows[index][key]);
    // bungalows[index][key];
    // image.style.display = "block";
    card.appendChild(image);
    let locationName = document.createElement("h4");
    locationName.innerHTML = bungalows[index].name;
    card.appendChild(locationName);
    let prices = document.createElement("p");
    prices.innerHTML = bungalows[index].price;
    prices.style.color = "green";
    card.appendChild(prices);
    location.appendChild(card);
  };

  for (let i = 0; i < 6; i++) {
    cardGenerator(foodColumn, bungalows, i, "food", "large-food");
  }

  for (let i = 0; i < photos.length - 1; i++) {
    cardGenerator(twoColumnRow, bungalows, i, "photo", "small-location");
  }
  
  cardGenerator(twoColumnRow, bungalows, 0, "photo", "small-location");
  //Footer Generator


  const footerGenerator = () => {
    let footer = document.createElement("footer");
    footer.style.bottom = 0;
    footer.style.width = "100vw";
    footer.style.height = "200px";
    footer.style.position = "relative";
    footer.style.border = "1px solid black";
    footer.classList.add("wrapper");
    footer.style.justifyContent = "space-between";

    let left = document.createElement("div");
    left.classList.add("wrapper");
    left.style.flexDirection = "column";
    left.style.alignItems = "center";
    left.style.width = "33%";
    footer.append(left);
    let leftPara = document.createElement("span");
    leftPara.style.marginTop = "40px";
    leftPara.innerText = "Booking begins January 20, 2020";
    left.append(leftPara);
    left.append((document.createElement("span").innerText = "Contact"));
    for (let i = 5; i < 10; i++) {
      const filler = document.createElement("span");
      filler.innerHTML = locations[i];
      left.append(filler);
    }
    let center = document.createElement("div");
    center.classList.add("wrapper");
    center.style.flexDirection = "column";
    center.style.alignItems = "center";
    center.style.justifyContent = "center";
    center.style.width = "33%";
    footer.append(center);
    for (let i = 10; i < locations.length-1; i++) {
      const filler = document.createElement("span");
      filler.innerHTML = locations[i];
      center.append(filler);
    }
    footer.append(center);

    let right = document.createElement("div");
    right.classList.add("wrapper");
    right.style.flexDirection = "column";
    right.style.alignItems = "center";
    right.style.justifyContent =  "center";
    right.style.width = "33%";
    footer.append(right);
    for (let i = 0; i < 5; i++) {
      const filler = document.createElement("span");
      filler.innerHTML = locations[i];
      right.append(filler);
    }
    document.body.appendChild(footer);
  };

  footerGenerator();

  // Event Handler
  //Toggle menu for mobile
  const menu = document.getElementById("burger");
  const userList = document.querySelectorAll("ul")[0];
  const login = document.getElementById("login");
  const signUp = document.getElementById("sign-up");

  login.addEventListener("click", () => {
    location.replace("login.html");
  });

  signUp.addEventListener("click", () => {
    location.replace("sign-up.html");
  });

  menu.addEventListener("click", () => {
    userList.classList.toggle("active");
  });

  const pTag = document.querySelectorAll(".description");
  pTag.forEach(tag => {
    tag.addEventListener("click", () => {
      tag.children[1].classList.toggle("active");
    });
  });

  let formSearch = document.querySelectorAll("form")[0]
formSearch.addEventListener("submit", (event) => {
    event.preventDefault()
    let userInput = document.querySelectorAll("form")[0].children[2].value
    let stayDuration = document.querySelectorAll("input")[2].valueAsDate - document.querySelectorAll("input")[1].valueAsDate
    stayDuration/=1000
    stayDuration/=24
    stayDuration/=60
    stayDuration/=60
    stayDuration = Math.round(stayDuration)
    let guests =document.querySelectorAll("input")[3].valueAsNumber
    if(locations.includes(userInput)){
      let searchResult = bungalows[locations.indexOf(userInput)].name
      let searchPrice = bungalows[locations.indexOf(userInput)].price
      alert(`On average your trip to ${searchResult} will cost ${searchPrice} during your stay of ${stayDuration} days for ${guests + 1} people`)
    }
  })

  //Carousel
  const carouselSlider = document.querySelectorAll(".carousel-slider")[1];
  const carouselImages = document.querySelectorAll(".card");

  const prevBtn = document.querySelector(".previous");
  const nextBtn = document.querySelector(".next");
  let counter = 0;
  const size = carouselImages[6].clientWidth + 40;

  nextBtn.addEventListener("click", () => {
    if (counter > 7) {
      counter = 0;
    }
    carouselSlider.style.transition = "transfrom 0.4s ease-in-out";
    counter++;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  });

  prevBtn.addEventListener("click", () => {
    if (counter <= 0) {
      counter = 9;
    }
    carouselSlider.style.transition = "transfrom 0.4s ease-in-out";
    counter--;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  });

  const userData = document
    .querySelectorAll(".carousel-slider")[1]
    .querySelectorAll(".card");

  for (let i = 0; i < userData.length; i++) {
    userData[i].addEventListener("click", () => {
      myStorage.setItem("id", userData[i].children[1].innerHTML);
      myStorage.setItem("price", userData[i].children[2].innerText);

      location.replace("dummy.html");
    });
  }
  const foodData = document
    .querySelectorAll(".carousel-slider")[2]
    .querySelectorAll(".card");

  for (let i = 0; i < foodData.length; i++) {
    foodData[i].addEventListener("click", () => {
      myStorage.setItem("id", foodData[i].children[1].innerHTML);
      myStorage.setItem("price", foodData[i].children[2].innerText);
      location.replace("dummy.html");
    });
  }

  const scrollToTop = function() {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.style.background = "url('../images/up-arrow.png')";
    button.style.backgroundPosition = "center";
    button.style.position = "fixed";
    button.style.bottom = 0;
    button.style.height = "40px";
    button.style.right = 0;
    button.style.border = "4px solid black";
    button.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
    document.body.append(button);
  };
  scrollToTop();
}
onReady();
