// app.js
document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([-26.2041, 28.0473], 11); // Johannesburg center as default
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19}).addTo(map);

  

  // Later: functions for adding markers, filling results, etc.
});

