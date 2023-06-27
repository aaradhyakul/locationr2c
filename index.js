const lat = document.getElementById("latitude");
const long = document.getElementById("longitude");
const alt = document.getElementById("altitude");
const speed = document.getElementById("speed");
let map = L.map("map").setView([12.9625157, 77.648909], 13);
let marker = L.marker([12.9625157, 77.648909]).addTo(map);
let popup = L.popup();
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const mapClick = (e) => {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked on the map at : " + e.latlng.toString())
    .openOn(map);
};
map.on("click", mapClick);

const geoCheck = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((pos) => {
      lat.textContent = pos.coords.latitude.toFixed(2);
      long.textContent = pos.coords.longitude.toFixed(2);
      alt.textContent =
        pos.coords.altitude === null
          ? "Not available"
          : pos.coords.altitude.toFixed(2);
      speed.textContent =
        pos.coords.speed === null
          ? "Not available"
          : pos.coords.speed.toFixed(2);
    });
    setTimeout(() => {
      geoCheck();
      console.log("update");
    }, 200);
  } else {
    console.log("use IP approximation");
  }
  map.setView([pos.coords.latitude, pos.coords.longitude], 13);
  marker = L.marker([12.9625157, 77.648909], {
    color: "red",
  }).addTo(map);
};
geoCheck();
