(function(){
	'use strict';

  angular
    .module('rutas')
    .config(configuration);

      function configuration($routeProvider){
          $routeProvider
            .when('/',
            {
              template:`
							<h1>hola mundo</h1>
							`
            })
						.when('/cards',
						{
							template: `
							<h3>hola</h3>
							`
						})
						.when('/slider',
						{
							template: `
						 <div>
							 <slider></slider>
							</div>
							`
						})
						.otherwise({
							redirectTo:'/'
						})
      }
})();

// ``-->se usan cuando vas a mandar html
// ''->se usan cuando vas a mandar templates o urls
