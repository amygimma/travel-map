if($('#map').length > 0) {
  function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);


    var trip_id = $("#trip_id").data("tripId");
    $.ajax({
      url: "/api/trips/" + trip_id
    }).done(function(data){
      _.each(data, function(place){
        if(place.latitude !== null && place.longitude !== null){
          var coords = { lat: place.latitude, lng: place.longitude };
          var title = place.name;
          var blog_url = place.blog_url;
          var marker = new google.maps.Marker({
            position: coords,
            map: map,
            title: title
          });
          map.panTo(marker.getPosition());
        }
      });
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
}
