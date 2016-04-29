/* IIFE */
(function(){
  'use strict';
  angular.module('myapp',[] )
    .directive('ejemplo', ejemplo);
  function ejemplo(){
      
      var directive = {
          restrict: 'EA',
        /*
        *   A - Atributo <div tag="">
        *   E - Element <tag>
        * */
          templateUrl: 'directive.html',
        /* Archivo HTML */
        /*CONTROLADOR*/
         controller: directiveController,
         controllerAs: 'asController',
         bindToController: true,
          replace: true
      };
      //
      return directive;
  }
  function directiveController(){
      var asController = this;
      asController.param = Math.random();
  }
  
})();