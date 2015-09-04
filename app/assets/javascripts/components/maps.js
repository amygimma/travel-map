if($('#map').length > 0) {
  function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);
    console.log(map);
    // debugger;
    var marker;
    function createMarker(coords, map, title){
      marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: title
      });
    }

    var locations = [];
    function getLocations() {
      var trip_id = $("#trip_id").data("tripId");
      $.ajax({
        url: "/api/trips/" + trip_id
      }).done(function(data){
        _.each(data, function(place){
          var coords = { lat: place.latitude, lng: place.longitude }
          var title = place.name;
          var title = place.blog_url;

          locations.push(coords);
          console.log(locations);
          debugger;
        });
      });
    }

    getLocations();

  }
  google.maps.event.addDomListener(window, 'load', initialize);
}
