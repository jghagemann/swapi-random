let button     = document.querySelector("#button");

let name       = document.querySelector("#name");
let container  = document.querySelector(".container")
let height     = document.querySelector("#height");
let mass       = document.querySelector("#mass");

const findCharacter = () => {
  loadingScreen();
  let randomNum = Math.floor((Math.random() * 88) + 1);
  let url = "https://swapi.co/api/people/";

  axios.get(`${url}${randomNum}`)
    .then(response => {
      displayInfo(response.data);
    })
    .catch(err => {
      showError();
    })
}

const displayInfo = (data) => {
  name.innerHTML = `Name: ${data.name}`;
  height.innerHTML = `Height: ${data.height}`;
  mass.innerHTML = `Mass: ${data.mass}`;
}

const showError = () => {
  name.innerHTML = "The Intergalactic Data cannot be displayed right now."
}

const loadingScreen = () => {
  name.innerHTML   = `<img src=http://animated-gifs.org/wp-content/uploads/2012/01/star-wars-021.gif>`;
  height.innerHTML = "";
  mass.innerHTML   = "";
}

button.addEventListener("click", findCharacter);