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
    $.ajax({
      url: 'https://86.8.141.101:3000/api/addSighting',
      data: {
        pokemon: $('#pokeName').val(),
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      },
      method: 'POST',
      success: function(res){
      }
    })
    placeMarker(e.latLng.lat(), e.latLng.lng(), map);
  })

  map.addListener('zoom_changed', function(){
    if(map.getZoom() < 10){
      map.setZoom(10);
    }
  })

  loadSightings = function(){
    $.ajax({
      url: 'https://86.8.141.101:3000/api/getSightings',
      success: function(res){
        res.forEach(function(sighting){
            loadMarker(sighting.lat, sighting.lng, sighting.pokemon, map)
        })
      }
    })
  }

  loadMarker = function(lat, lng, pokemon, map){
    var image = {
      url: 'http://images.pokemonlake.com/' + pokemon + '.png',
      scaledSize: new google.maps.Size(40,40)
    }

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      animation: google.maps.Animation.DROP,
      icon: image
    })

  }

  placeMarker = function(lat, lng, map){
    var image = {
      url: 'http://images.pokemonlake.com/' + $('#pokeName').val() + '.png',
      scaledSize: new google.maps.Size(40,40)
      // origin: new google.maps.Point(0,0),
      // anchor: new google.maps.Point(0,0)
    }

    // var image =

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      title: "Sup",
      animation: google.maps.Animation.DROP,
      icon : image
    });
  }

loadSightings();

}
