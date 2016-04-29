/*IIFE
*/

(function(){
	'use strict'

	angular
		.module('myApp',[]) //en los corchetes se van a importar servicios  y el nombre myApp debe ser igualito al nombre en ng-app del index.html
		.controller('myController',myController); //myController debe ser igual al nombre de la función y se enlaza al archivo index.html

		function myController()
		{
			var first    = this;
			first.name   = "Joel Martínez";
			first.number = 5;
			first.age    = 0;

			first.people = [
			{"name":"Josue","age":11,"place":"Mexico"},
			{"name":"Alex","age":23,"place":"USA"},
			{"name":"Pablo","age":34,"place":"Canada"},
			 {"name":"Jorge","age":74,"place":"Germany"}
			];

			first.clickeame = function(){
				first.age+=1;
			}

			first.addage = function(person){
				person.age+=1;
			}
		}

})();

/*
El contexto se refiere a objetos mientras que el scope se refiere al alcance de las funciones. 
*/
/*Si pones === indica que regresará qué tipo de dato corresponde.
5=='5' ->true
5==='5' ->false porque te arroja el tipo de dato
*/