
angular.module('starter')
.directive('scResultEntry', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {
      track: '='
    },
    templateUrl: 'js/directives/sc-result-entry.html'
  };
});