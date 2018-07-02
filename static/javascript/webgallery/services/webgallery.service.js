/** 
* Webgallery
* @namespace projects.webgallery.services
*/

(function () {
   'use strict';
   
   angular
      .module('projects.webgallery.services')
      .factory('Webgallery', Webgallery);
   
   Webgallery.$inject = ['$cookies', '$http'];
   
   /**
   * @namespace Webgallert
   * @returns {Factory}
   */
   function Webgallery($cookies, $http) {
      /**
      * @name Webgallery
      @ desc The Factory to be returned
      */
      var Webgallery = {};
      
      return Webgallery;
      
      
      /**
      * @name register
      * @desc Try to register a new user*/
      
   }
})