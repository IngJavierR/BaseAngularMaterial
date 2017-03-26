(function(){
  'use strict';

  angular.module('demoApp')
    .factory('jokes', jokes);

    jokes.$inject = ['$http'];

    function jokes($http){
        var service = {
          getJoke: getJoke
        };

        return service;

        function getJoke(){
           return $http.get('http://api.icndb.com/jokes/random')
                .then(getJokeComplete);
          function getJokeComplete(result){
            return result.data.value.joke;
          };
        }


    }

})();
