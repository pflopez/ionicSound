angular.module('starter')
.controller('PlaylistsCtrl', 
       [ '$scope', 'SoundCloudService', '$ionicLoading' , 'SoundCloudQuery' , 
function( $scope,   SoundCloudService ,  $ionicLoading,    SoundCloudQuery) {

  var idle = true;

  var query =  SoundCloudQuery.queryByUser({user : '981755'});

  $ionicLoading.show({
    template: 'Loading...'
  });
  


  $scope.loadMore = function (){
    if(idle){
		idle = false;
		query.getNextPage().then(function(tracks){
			$scope.tracks = $scope.tracks ? $scope.tracks.concat(tracks) : tracks;
	    	$ionicLoading.hide();
	    	idle = true;
	    	$scope.$broadcast('scroll.infiniteScrollComplete');
      	});  
    }
  }


}]).controller('PlaylistCtrl', ['$scope', '$stateParams' , function($scope, $stateParams) {

}]);