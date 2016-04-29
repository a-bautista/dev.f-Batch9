(function(){
	'use strict'
	
		var ejemplo2   = {
			controller : componentController,  
			template : ` 
			<div>
    			<p>
        			{{$ctrl.param}}
    			</p>
			</div>
		`
		};
		function componentController(){
			var asController = this;
			asController.param = Math.random();
		};

		angular
		 .module('component')
		 .component('ejemplo2',ejemplo2); //ejemplo2 será una nueva etiqueta de html. 
										// un componente es un objeto

})();

/*
* ctrl hace referencia a un controller. 
* $ variables, funciones que son de ámbito público.
* $$ variables, funciones que son de ámbito privado.
*/

// Tarea: Pasar el card a un componente. buscar apis open source