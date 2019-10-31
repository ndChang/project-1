function onLoad(getLocalValue) {
  const login = document.getElementById("login");
  const signUp = document.getElementById("sign-up");
  const home = document.getElementById("home");

  home.addEventListener("click", () => {
    location.replace("index.html");
  });

  login.addEventListener("click", () => {
    location.replace("login.html");
  });

  signUp.addEventListener("click", () => {
    location.replace("sign-up.html");
  });
  
  const id = getLocalValue;
  document.querySelector("title").innerText = localStorage.id;
  const destination = document.querySelector(".container");
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

  let index;
  for (let i = 0; i < locations.length - 1; i++) {
    if (id.id == locations[i]) {
      index = i;
      console.log(index);
      break;
    }
  }

  console.log(index);

  const buildWebpage = function(name) {
    let div = document.createElement("div");
    div.classList.add("wrapper", "card", "hero", "redirect");
    div.style.flexDirection = "column"
    let heading = document.createElement("h3");
    let image = document.createElement("img");
    let informationPrice = document.createElement("p");
    let informationListing = document.createElement("p")
    informationListing.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt, veritatis dolore repudiandae ab nemo. Unde, nesciunt nemo minus, totam incidunt aliquid, deserunt commodi libero molestias quod iste ratione ut."
    informationPrice.innerHTML = name.price;
    informationPrice.style.color = "green";
    image.setAttribute("src", `../images/${index + 2 }.jpg`);
    div.append(image);
    heading.innerText = name.id;
    heading.style.color = "black";
    div.appendChild(heading);
    div.appendChild(informationPrice);
    div.appendChild(informationListing)

    destination.appendChild(div);
  };
  const buildFoodPage = function(name) {
    let div = document.createElement("div");
    div.classList.add("wrapper", "card", "hero", "redirect");
    div.style.flexDirection = "column"
    let heading = document.createElement("h3");
    let image = document.createElement("img");
    let informationPrice = document.createElement("p");
    let informationListing = document.createElement("p")
    informationListing.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt, veritatis dolore repudiandae ab nemo. Unde, nesciunt nemo minus, totam incidunt aliquid, deserunt commodi libero molestias quod iste ratione ut."
    informationPrice.innerHTML = name.price;
    informationPrice.style.color = "green";
    image.setAttribute("src", `../images/food/${index}.jpg`);
    div.append(image);
    heading.innerText = name.id;
    heading.style.color = "black";
    div.appendChild(heading);
    div.appendChild(informationPrice);
    div.appendChild(informationListing)

    destination.appendChild(div);
  };
  buildFoodPage(id)
  buildWebpage(id);
}
onLoad(localStorage);
