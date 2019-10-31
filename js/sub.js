const login = document.getElementById("login");
const signUp = document.getElementById("sign-up");
const home = document.getElementById("home")

home.addEventListener("click", () => {location.replace("index.html")})

login.addEventListener("click", () => {
  location.replace("login.html");
});

signUp.addEventListener("click", () => {
  location.replace("sign-up.html");
});
