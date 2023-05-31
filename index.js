(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyB1RAkvfIih4MHaSTXBTScQtcJuHq_OK50", v: "weekly"});
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -73.935242 },
    zoom: 8,
  });
}

function getLocation() {
  var x = document.getElementById("demo");
  var mapDiv = document.getElementById("map");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        x.innerHTML =
          "Latitude: " +
          position.coords.latitude +
          "<br>" +
          "Longitude: " +
          position.coords.longitude;
        showLocationOnMap(position.coords.latitude, position.coords.longitude);
      },
      function (error) {
        x.innerHTML = "Error retrieving location: " + error.message;
      }
    );
  } else {
    x.innerHTML = "Your browser does not support geolocation";
  }
}

function showLocationOnMap(latitude, longitude) {
  const mapOptions = {
    center: { lat: latitude, lng: longitude },
    zoom: 12,
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
  });
}

initMap();
