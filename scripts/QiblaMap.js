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

var myQiblaMap;

myQiblaMap = L.map('QiblaMap').setView([21.423121, 39.825735], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myQiblaMap);
L.control.scale().addTo(myQiblaMap);

var marker = L.marker([21.423121, 39.825735]).addTo(myQiblaMap);
marker.bindPopup("Here is Kaabah.").openPopup();
//search
var searchControl = L.esri.Geocoding.geosearch().addTo(myQiblaMap);

//add Layer groups to search searchControl
var results = L.layerGroup().addTo(myQiblaMap);

    searchControl.on('results', function(data){
    results.clearLayers();

    for(var i = data.results.length - 1; i>=0; i--){
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });

  var PI = Math.PI;
  var win = null;
  function calculate(lat, lon) {
  	if (isNaN(lat+0.0) || isNaN(lon+0.0)) {
  		alert("Non-numeric entry/entries");
  		return "???";
  	}
  	if ((lat-0.0)>(90.0-0.0) || (lat-0.0)<(-90.0-0.0)) {
  		alert("Latitude must be between -90 and 90 degrees");
  		return "???";
  	}
  	if ((lon-0.0)>(180.0-0.0) || (lon-0.0)<(-180.0-0.0)) {
  		alert("Longitude must be between -180 and 180 degrees");
  		return "???";
  	}

  	if ((lat+0.0==21.4) && (lon+0.0==39.8)) return "Any Direction";
  	latk = 21.4225*PI/180.0;
  	longk = 39.8264*PI/180.0;
  	phi = lat*PI/180.0;
  	lambda = lon*PI/180.0;
  	qiblad = 180.0/PI*Math.atan2(Math.sin(longk-lambda),                Math.cos(phi)*Math.tan(latk)-Math.sin(phi)*Math.cos(longk-lambda));
    console.log(qiblad);
  	return (qiblad);
  }


  function clearResult()
  {
  	if (document.getElementById) document.getElementById('Qibla').innerHTML='';
  	else if(document.all) document.all['Qibla'].innerText='';
  	else if (win) {
  		win.close();
  		win = null;
  	}
  }
  function displayDirection(a)
  {
  	d = (a>=0? a+" degrees East of North" : -a+" degrees West of North");
  	if (document.getElementById) document.getElementById('Qibla').innerHTML = d;
  	else if (document.all) document.all['Qibla'].innerText = d;
  	else {
  		win = open('','Result','width=200,height=75'); win.document.close(); win.document.write('Qibla direction is <br>'+d);
  	}
  }

window.alert("Instructions:\n1. Use the map to see the distance between your location and the Kaabah.\n2. Use the qibla calculator to calculate the qibla degree from your location.");
