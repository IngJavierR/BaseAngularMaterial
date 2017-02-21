(function() {
  'use strict';

  angular.module('demoApp')
    .factory('Catalogo', Catalogo);

  function Catalogo($resource) {
    return $resource(
      'http://127.0.0.1:9898/api/:service/:name/:id/:cliente/:categoria', {
        service: '@service',
        name: '@name',
        id: '@id',
        cliente: '@cliente',
        categoria: '@categoria'
      }, {
        getlist: {
          method: 'GET',
          isArray: true
        },
        savesingle: {
          method: 'POST',
          isArray: true
        }
      }
    );
  }
}());
