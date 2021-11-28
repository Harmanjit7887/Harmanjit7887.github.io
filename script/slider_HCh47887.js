
 
          var images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
 
          var imagesarraylength = images.length - 1;
 
          var int = self.setInterval(function () { tick() }, 5000);
 
 
          var i = 0;
 
          function tick() {
 
 
              i = i + 1;
 
              if (i>imagesarraylength) {
 
                  i = 0;
 
              }
 
              document.getElementById("slideshow").src = images[i];
 
 
          }
 
   