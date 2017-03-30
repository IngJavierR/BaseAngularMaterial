(function(){
  'use strict';

  angular.module('demoApp')
    .factory('jokes', jokes);

    jokes.$inject = ['$http', '$resource'];

    function jokes($http, $resource){
        var service = {
          getJoke: getJoke,
          getJokes: getJokes
        };

        return service;

        function getJoke(){
           return $http.get('http://api.icndb.com/jokes/random')
                .then(getJokeComplete);
          function getJokeComplete(result){
            return result.data.value.joke;
          };
        }

        function getJokes(){
          return $resource(
            'http://api.icndb.com/jokes/random/:number',
            { number:'@number'} );
        }

    }

})();
