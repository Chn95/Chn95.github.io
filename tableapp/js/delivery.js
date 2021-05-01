var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let elLocate = document.getElementById("btnLocate");
elLocate.addEventListener("click",function(){
 if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      let elLat = document.getElementById("lat");
      let elLong = document.getElementById("long");
      elLat.innerHTML = "Latitude: " + position.coords.latitude;
      elLong.innerHTML = "Longtitude: " + position.coords.longitude;
    });
 } else {
     alert("Geolocation is not supported by this browser.")
 }
});