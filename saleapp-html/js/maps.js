function initialize() {
  var coordinates = new google.maps.LatLng(21.014833,105.814892);
  //var coordinates = new google.maps.LatLng(-12.0810842,-77.0122442);
  var mapProp = {
    center: coordinates, 
    zoom: 20, 
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false,
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapProp);
  
  var marker = new google.maps.Marker({
    disableDefaultUI: false,
    position: coordinates,
    animation: google.maps.Animation.BOUNCE,  // animate for google maps
    icon: {
      anchor: new google.maps.Point(16, 16),
      url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4gIDxwYXRoIGQ9Ik03Ni41IDI4LjVjLS4yLS44LS41LTEuNy0uNy0yLjVDNzEuOSAxNS41IDYxLjkgOCA1MC4xIDhjLTExLjkgMC0yMS45IDcuNS0yNS44IDE4LS4zLjgtLjYgMS42LS43IDIuNS0uNiAyLjItMSA0LjUtMSA2LjkgMCAxLjUuMiAzLjIuNSA0LjkuMS40LjEuNy4yIDEuMSAzLjUgMTcuNCAxOS4xIDQxLjYgMjQuOCA1MCAxIDEuNSAzLjEgMS41IDQuMSAwIDUuNy04LjQgMjEuMy0zMi43IDI0LjctNTAuMS4xLS40LjItLjcuMi0xLjEuMy0xLjguNS0zLjUuNS00LjkgMC0yLjMtLjUtNC41LTEuMS02Ljh6TTUwLjEgNDkuN2MtNy42IDAtMTMuNi02LjEtMTMuNi0xMy42czYuMS0xMy42IDEzLjYtMTMuNiAxMy42IDYuMSAxMy42IDEzLjYtNi4xIDEzLjYtMTMuNiAxMy42eiIvPjwvc3ZnPg=='
    }
  });
  
  marker.setMap(map);
  var content = '';
  
  var infowindow = new google.maps.InfoWindow({
    content: content
  });
  
  infowindow.open(map, marker);
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
  
}

google.maps.event.addDomListener(window, 'load', initialize);
// google.maps.event.trigger(map, 'resize');

function hideMenu () {
  console.log('clicksss');
  var myMenu = document.querySelector('.menu');
  myMenu.classList.toggle = 'hide';
}