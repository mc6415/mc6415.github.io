var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.5074, lng: 0.1278},
    zoom: 12
  });

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
    }, function(){
      console.log("GeoLocation is no working cap'n")
    })
  }

  map.addListener('click', function(e){
    placeMarker(e.latLng, map);
  })

  placeMarker = function(latlng, map){
    var image = 'http://images.pokemonlake.com/' + $('#pokemonSight').val() + '.png'

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: "Sup",
      animation: google.maps.Animation.DROP,
      icon : image
    });
  }
}
