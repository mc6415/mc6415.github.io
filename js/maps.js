var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.5074, lng: 0.1278},
    zoom: 15
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here');
      map.setCenter(pos);
    }, function(){
      console.log("GeoLocation is no working cap'n")
    })
  }

  map.addListener('click', function(e){
    placeMarker(e.latLng, map);
  })

  map.addListener('zoom_changed', function(){
    if(map.getZoom() < 10){
      map.setZoom(10);
    }
  })

  placeMarker = function(latlng, map){
    var image = {
      url: 'http://images.pokemonlake.com/' + $('#pokemonSight').val() + '.png',
      scaledSize: new google.maps.Size(50,50),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0,0)
    }

    // var image =

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: "Sup",
      animation: google.maps.Animation.DROP,
      icon : image
    });
  }
}
