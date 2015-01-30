
angular.module('starter')
.directive('scResultList', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      results:  '=',
      loadMore: '&?' 
    },
    templateUrl: 'js/directives/sc-result-list.html',
    controller: 'scResultListCtrl'
  };
});