(function(){
  	'use strict'

  angular
    .module('rutas')
    .component('slider',slider);

    var slider = {
      controller : sliderController,
      template: `
      <div class="slider">
   <ul class="slides">
     <li>
       <img src="http://lorempixel.com/580/250/nature/1"> <!-- random image -->
       <div class="caption center-align">
         <h3>This is our big Tagline!</h3>
         <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
       </div>
     </li>
     <li>
       <img src="http://lorempixel.com/580/250/nature/2"> <!-- random image -->
       <div class="caption left-align">
         <h3>Left Aligned Caption</h3>
         <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
       </div>
     </li>
     <li>
       <img src="http://lorempixel.com/580/250/nature/3"> <!-- random image -->
       <div class="caption right-align">
         <h3>Right Aligned Caption</h3>
         <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
       </div>
     </li>
     <li>
       <img src="http://lorempixel.com/580/250/nature/4"> <!-- random image -->
       <div class="caption center-align">
         <h3>This is our big Tagline!</h3>
         <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
       </div>
     </li>
   </ul>
 </div>

      `
    };

    function sliderController(){
      var slider = this;
      slider.jsonvar =[
        {
          'img': 'http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
            	'name': 'Matrix',
            	'cast' : ['NEO','TRINITY','MORFEO'],
            	'year' :  1999,
            	'category': 'Sci-Fi'
        },
        {
          'img': 'http://ia.media-imdb.com/images/M/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ@@._V1_UY268_CR4,0,182,268_AL_.jpg',
          'name': 'American Gangster',
          'cast' : ['NEO','TRINITY','MORFEO'],
          'year' :  1990,
          'category': 'Sci-Fi'
        }
      ]
    }

})();
