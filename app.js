// app.js

//Sample Data
const services = [
  {
    id:1,
    name: "Downtown Clinic",
    category: "Clinic",
    lat: -26.2041,
    lng: 28.0473,
    description: "Open weekdays from 8am - 5pm."
  },
  {
    id:2,
    name: "Hillbrow Library",
    category: "Library",
    lat: -26.1884,
    lng: 28.0473,
    description: "Public library with free Wi-Fi and study areas."
  },
  {
    id:3,
    name: "Soweto Food Bank",
    category: "Food Bank",
    lat: -26.2677,
    lng: 27.8585,
    description: "Community food distribution center."
  }
];


document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([-26.2041, 28.0473], 11); // Johannesburg center as default
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19}).addTo(map);
  
  //Get custom icons
  const getIcon=(category)=>{
    const iconSize=[25,41];
    const iconAnchor=[12,4];
    const popupAnchor=[1,-34];

    return L.icon({
      iconUrl:`icons/${category.toLowerCase()}.png`, //Still need to add icons
      iconSize: iconSize,
      iconAnchor: iconAnchor,
      popupAnchor: popupAnchor
    })
  }

   //Add Markers for services
  services.forEach(service=>{
    try{
      if(!service.lat || !service.lng){
        console.log(`Invalid coordinates for service: ${service.name}`);
        return;
      }
    //add marker with custom icons
    const marker=L.marker([service.lat, service.lng],{
      icon:getIcon(service.category)
    }).addTo(map);

    //bind popup to marker
    marker.bindPopup(`
      <div class="popup-content">
      <h3>${service.name}</h3>
      <p>Category:<strong>${service.category}</strong></p>
      <p>Description:${service.description}</p>
      </div>
      `
      
    );
  }catch(error){
    console.error(`Error creating marker for service: ${service.name}`, error)
  }
  
});
});
