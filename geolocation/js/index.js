let elLocate = document.getElementById("btnLocate");
elLocate.addEventListener("click",function(){
 if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(){
      let elLat = document.getElementById("Lat");
      let elLong = document.getElementById("Long");
      elLat.innerHTML = "Latitude: " + position.coords.latitude;
      elLong.innerHTML = "Longtitude: " + position.coords.longitude;
    });
 } else {
     alert("Geolocation is not supported by this browser.")
 }
});