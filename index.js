let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: -24.397, lng: 10.644 },
    zoom: 8,
  });
}

initMap();