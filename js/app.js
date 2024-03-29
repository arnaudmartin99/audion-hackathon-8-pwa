const container = document.querySelector(".container");
const cards = [
  {
    name: "Podcast",
    image: "images/podcast.png"
  },
  {
    name: "Musique",
    image: "images/music.png"
  },
  {
    name: "Radio",
    image: "images/radio.png"
  }
];
const generateCards = () => {
  let output = "";
  cards.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Ecouter</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", generateCards);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
