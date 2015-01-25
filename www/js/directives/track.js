
angular.module('starter')
.directive('scTrack', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {
      track: '='
      // track-click:'='
    },
    templateUrl: 'js/directives/track.html'
    //template : '<img class="track__bg" ng-src="{{track.waveform_url}}"><div class="track"><img class="track__img" ng-src="{{track.artwork_url}}"> <div class="track__title"> {{track.title}} </div> <div class="track__username">{{track.user.username}}</div></div>'
  };
});