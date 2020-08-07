document.getElementById("showTime").innerHTML = Date();

document.addEventListener("mouseenter", mouseEnter);
document.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  document.getElementsByTagName("A")[0].style.fontWeight = "bold";
  document.getElementsByTagName("A")[1].style.fontWeight = "bold";
  document.getElementsByTagName("A")[2].style.fontWeight = "bold";
  document.getElementsByTagName("A")[3].style.fontWeight = "bold";
  document.getElementsByTagName("A")[4].style.fontWeight = "bold";
  document.getElementsByTagName("A")[5].style.fontWeight = "bold";
  document.getElementsByTagName("A")[6].style.fontWeight = "bold";
  document.getElementsByTagName("A")[7].style.fontWeight = "bold";
}

function mouseLeave() {
  document.getElementsByTagName("A")[0].style.fontWeight = "normal";
  document.getElementsByTagName("A")[1].style.fontWeight = "normal";
  document.getElementsByTagName("A")[2].style.fontWeight = "normal";
  document.getElementsByTagName("A")[3].style.fontWeight = "normal";
  document.getElementsByTagName("A")[4].style.fontWeight = "normal";
  document.getElementsByTagName("A")[5].style.fontWeight = "normal";
  document.getElementsByTagName("A")[6].style.fontWeight = "normal";
  document.getElementsByTagName("A")[7].style.fontWeight = "normal";
}

var myMosqueMap;

myMosqueMap = L.map('MosqueMap').setView([3.136783, 101.682856], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMosqueMap);
L.control.scale().addTo(myMosqueMap);

//search
var searchControl = L.esri.Geocoding.geosearch().addTo(myMosqueMap);

//add Layer groups to search searchControl
var results = L.layerGroup().addTo(myMosqueMap);

    searchControl.on('results', function(data){
    results.clearLayers();

    for(var i = data.results.length - 1; i>=0; i--){
      results.addLayer(L.marker(data.results[i].latlng));
      results.addLayer(L.circle(data.results[i].latlng).setRadius(1000));
    }
  });

window.alert("Instructions:\n1. Search for your desired location using the map.\n2. Zoom in the circle to see the mosques within 1km from your set location.\n\nMoon&star = Mosque.");
