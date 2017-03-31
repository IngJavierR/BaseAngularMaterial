(function(){
  'use strict';

  angular.module('demoApp')
    .factory('Jokes', Jokes);

    Jokes.$inject = ['$http'];

  function Jokes($http){
    var service = {
        getJoke: getJoke,
        getJokes: getJokes
    };
    return service;

    function getJoke(){
      return $http.get('http://api.icndb.com/jokes/random')
      .then(responseJokeComplete, onerror);

      function responseJokeComplete(result){
        return result.data.value.joke;
      }

      function onerror(error){
        return error;
      }
    }

    function getJokes(){

    }

  }

})();
