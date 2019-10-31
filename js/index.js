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
      (this.text = text)
  };
  //Random Number Generator
  const priceGenerator = () => {
    return Math.random().toFixed(2) * 100 + 30;
  };

  //Scan through image folder && populates photos array
  for (let i = 2; i <= 15; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", `../images/${i}.jpg`);
    photos.push(image);
  }

  for (let i = 0; i < 13; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", `../images/food/${i}.jpg`);
    foods.push(image);
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

  //Populate Two Column
  const cardGenerator = function(location, bungalows, index, key, className) {
    let card = document.createElement("div");
    card.classList.add("wrapper", "card", className);
    let image = bungalows[index][key];
    image.style.display = "block";
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

  //Footer Generator
  const footerGenerator = () => {
    let footer = document.createElement("footer");
    footer.style.bottom = 0;
    footer.style.width = "100vw";
    footer.style.height = "200px";
    footer.style.position = "relative";
    footer.style.background = "black";
    // document.body.appendChild(footer)
  };
    for (let i = 0; i < photos.length - 1; i++) {
      cardGenerator(twoColumnRow, bungalows, i, "photo", "small-location");
    }


  for (let i = 0; i < 6; i++) {
    cardGenerator(foodColumn, bungalows, i, "food", "large-food");
  }

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
    console.log(event);
  });

  const pTag = document.querySelectorAll(".description");
  pTag.forEach(tag => {
    tag.addEventListener("click", () => {
      tag.children[1].classList.toggle("active");
    });
  });

  //Carousel
  const carouselSlider = document.querySelectorAll(".carousel-slider")[1];
  const carouselImages = document.querySelectorAll(".card");

  const prevBtn = document.querySelector(".previous");
  const nextBtn = document.querySelector(".next");
  let counter = 0;
  const size = carouselImages[6].clientWidth + 40;

  nextBtn.addEventListener("click", () => {
    if (counter >= 7) {
      counter = 1;
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

  const userData = document.querySelectorAll(".card");

  for (let i = 0; i < userData.length - 1; i++) {
    userData[i].addEventListener("click", () => {
      myStorage.setItem("id", userData[i].children[1].innerHTML);
      myStorage.setItem("price", userData[i].children[2].innerText);
      location.replace("dummy.html")
    });
  }

  //Widget maker
  // const widgetMaker = function(name, imageCount, className) {
  //   const createBanner = function() {
  //     let divContainer = document.createElement("div");
  //     divContainer.classList.add("wrapper", "exploration", "off-center");
  //     let heading = document.createElement("h2");
  //     heading.innerText = name;
  //     let buttonContainer = document.createElement("div");
  //     let btn1 = document.createElement("button");
  //     btn1.classList.add("prev", "btn");
  //     btn1.innerText = "Previous";
  //     let btn2 = document.createElement("button");
  //     btn2.classList.add("next", "btn");
  //     btn2.innerText = "Next";
  //     buttonContainer.append(btn1);
  //     buttonContainer.appendChild(btn2);
  //     divContainer.append(heading);
  //     divContainer.append(buttonContainer);
  //     document.body.append(divContainer);
  //   };
  //   createBanner();
  //   const createCarousel = function() {
  //     let carouselContainer = document.createElement("div");
  //     carouselContainer.classList.add("carousel-container");
  //     let carouselSlider = document.createElement("div");
  //     carouselSlider.classList.add("carousel-slider", "wrapper");
  //     carouselContainer.appendChild(carouselSlider);
  //     document.body.append(carouselContainer);
  //   };
  //   createCarousel();
  //   let newLocation = document.querySelectorAll(".carousel-slider")[3]
  //   const cardGenerator = function(location, bungalows, index, key, className) {
  //     let card = document.createElement("div");
  //     card.classList.add("wrapper", "card", className);
  //     let image = bungalows[index][key];
  //     image.style.display = "block";
  //     card.appendChild(image);
  //     let locationName = document.createElement("h4");
  //     locationName.innerHTML = bungalows[index].name;
  //     card.appendChild(locationName);
  //     let prices = document.createElement("p");
  //     prices.innerHTML = bungalows[index].price;
  //     prices.style.color = "green";
  //     card.appendChild(prices);
  //     location.appendChild(card);
  //   };
  //   for (let i = 0; i < imageCount; i++) {
  //     cardGenerator(newLocation, bungalows, i, "photo", className);
  //   }
  // };
  // widgetMaker("state", 8, "small-location");
}
onReady();
