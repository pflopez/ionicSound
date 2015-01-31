angular.module('ionicSound')
.directive('scResultEntry', function() {
  return {
    restrict: 'E',
    scope: {
      track: '='
    },
    templateUrl: 'js/directives/scResultEntry/sc-result-entry.html'
  };
});