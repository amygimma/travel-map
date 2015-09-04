if($('#map').length > 0) {
  function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker;
    function createMarker(coords, map, title){
      marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: title
      });
    }

    var locations = [];
    function getLocations () {

    }
  }
  google.maps.event.addDomListener(window, 'load', initialize);
}
