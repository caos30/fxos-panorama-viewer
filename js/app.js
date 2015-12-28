window.addEventListener("DOMContentLoaded", function() {
  "use strict";

  var imgWidth = 2000; /* this is the width of the demo image, in pixels */
  var imgHeight = 605; /* this is the height of the demo image, in pixels */
  var scrWidth = window.innerWidth; 
  var scrHeight = window.innerHeight; 
    
  // Orientation
  window.addEventListener("deviceorientation", function (event) {
    var alpha = Math.round(10*(360-event.alpha))/10;
    var gamma = Math.round(10*event.gamma)/10;
    if (gamma < 20) gamma = 20;
    if (gamma > 60) gamma = 60;
    /* == reescale alpha (0 -> 360) to maximum offset (0 -> imgWidth - scrWidth ) == */
        var offset_x = (alpha / 360 ) *  (imgWidth - scrWidth);
    /* == reescale gamma (20 -> 60) to maximum offset (0 -> imgHeight - scrHeight ) == */
        var offset_y = ( (60 - gamma) / 40 ) *  (imgHeight - scrHeight);
    document.body.style.backgroundPosition = '-' + offset_x.toFixed(0) +'px '+ '-' + offset_y.toFixed(0)+ 'px';
    document.querySelector("#alpha").innerHTML = alpha + "°";
    document.querySelector("#gamma").innerHTML = gamma + "°";
  });

  document.body.style.backgroundColor = '#000';
  document.body.style.backgroundImage = 'url("img/demo_photo.jpg")';
  document.body.style.backgroundPosition = '50% 50%';
    
});

