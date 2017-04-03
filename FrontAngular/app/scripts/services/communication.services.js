(function(){
  'use strict';

  angular.module('demoApp')
    .factory('Jokes', Jokes);

    Jokes.$inject = ['$http', '$resource'];

  function Jokes($http, $resource){
    var service = {
        //getJoke: getJoke,
        getJokes: getJokes,
        suma: suma
    };
    return service;

    /*function getJoke(){
      return $http.get('http://api.icndb.com/jokes/random')
      .then(responseJokeComplete, onerror);

      function responseJokeComplete(result){
        return result.data.value.joke;
      }

      function onerror(error){
        return error;
      }
    }*/

    function getJokes(){
      return $resource('http://api.icndb.com/jokes/random/:number',
        { number:'@number'} );
    }

    function suma(a,b){
      return a + b;
    }

  }

})();
