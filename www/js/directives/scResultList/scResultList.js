
angular.module('ionicSound')
.directive('scResultList', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      results:  '=',
      loadMore: '&?' 
    },
    templateUrl: 'js/directives/scResultList/sc-result-list.html',
    controller: 'scResultListCtrl'
  };
});