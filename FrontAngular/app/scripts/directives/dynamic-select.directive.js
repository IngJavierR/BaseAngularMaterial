(function(){
  'use strict';

  angular.module('demoApp')
    .directive('dynamicSelect', dynamicSelect);

    dynamicSelect.$inject = ['$compile'];

    function dynamicSelect($compile){
      return {
        restrict: 'E',
        replace: true,
        require: 'ngModel',
        scope:{
          label: '@',
          filter: '@',
          collection: '=',
          name: '@',
          form: '@'
        },
        link: function(scope, element, attrs, ngModel){
          var html = '<label>' + scope.label + '</label>' +
          '<md-select name="'+scope.name+'" ng-model="ngModel.$viewValue" required>' +
            filterList() +
          '</md-select>' +
          '<div ng-messages="'+scope.form+'.'+scope.name+'.$error">' +
            '<div ng-message="required">This is required.</div>' +
          '</div>';

          element
            .replaceWith(
              $compile(html)(scope));

          //Receta
          scope.ngModel = ngModel;
          scope.$watch(function() {
            return ngModel.$viewValue;
          }, function(newValue) {
            ngModel.$setViewValue(newValue);
            ngModel.$render();
          });

          function filterList(){
            var filteredList = scope.collection.filter(function(value){
              return value.key === scope.filter;
            });
            var selectHtml = '';
            filteredList.forEach(function(fil){
              selectHtml += '<md-option value="'+fil.id+'">'+fil.value+'</md-option>';
            });
            return selectHtml;
          }
        }
      };
    }

})();
