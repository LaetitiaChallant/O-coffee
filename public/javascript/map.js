


document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([50.339, 2.304], 18);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var marker = L.marker([50.338, 2.304]).addTo(map);
});

