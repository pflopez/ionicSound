angular.module('starter')
.controller('SmokeMachineCtrl', 
       [ '$scope', '$ionicLoading' , 'SoundCloudQuery' , '$ionicModal', '$moment',
function( $scope ,  $ionicLoading  ,  SoundCloudQuery  ,  $ionicModal ,  $moment ) {
  var query =  SoundCloudQuery.queryByUser({user : '981755'});
  
  /**
   * init controller
   * 
   */
  function init() {
    
    $ionicLoading.show({
      template: 'Loading...'
    });

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/info.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.loadMore();
  
  }


  /**
   * Loads more data. Used to get more records
   * @return {Promise} The resulting promise to hook to
   */
  $scope.loadMore = function (){
	  
    return query.getNextPage().then(function(tracks){	
      $scope.tracks = $scope.tracks ? $scope.tracks.concat(tracks) : tracks;
    	$ionicLoading.hide();
      return tracks;
  	});  
    
  }

  init();


}]);