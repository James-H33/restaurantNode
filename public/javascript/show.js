function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 44.540, lng: -78.546},
    zoom: 8
  });
}

function stringShow() {
  var desc = document.querySelector('.description p');
    console.log(desc.textContent.substring(0, 50));
}

stringShow();
