(function(){
  'use strict'

  angular
    .module('practica2')
    .config(configuration);

    function configuration($routeProvider){
        $routeProvider
          .when('/',
          {
              template:
                `<h1>hola</h1>`
          })
          .otherwise(
            {
            redirectTo: '/'
          });
    };

})();
