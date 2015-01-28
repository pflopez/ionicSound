angular.module('starter')
.controller('SmokeMachineCtrl', 
       [ '$scope', '$ionicLoading' , 'SoundCloudQuery' , '$ionicModal', '$moment',
function( $scope ,  $ionicLoading  ,  SoundCloudQuery  ,  $ionicModal ,  $moment ) {

  var idle = true;
  var query =  SoundCloudQuery.queryByUser({user : '981755'});
  
  
  

  function init() {
    $scope.hasSearchResults = true;

    $ionicLoading.show({
      template: 'Loading...'
    });

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/info.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

  }

  $scope.resultClick = function(result){
    $scope.info = result;

    result.big_artwork = result.artwork_url.replace('large', 't500x500');
    result.proper_time = $moment.utc(result.duration).format("HH:mm:ss");
    $scope.modal.show();
    $scope.loaded = true; 
    
  }

  $scope.closeModal = function(){
    $scope.modal.hide();  
    $scope.loaded = false; 
    //clear info
    $scope.info = null; 
  }

  $scope.loadMore = function (){
    if(idle){
		  idle = false;
      console.log("aca");
		  query.getNextPage().then(function(tracks){
			  
        $scope.tracks = $scope.tracks ? $scope.tracks.concat(tracks) : tracks;
	    	$ionicLoading.hide();
        
        console.log("aca");
        $scope.$broadcast('scroll.infiniteScrollComplete');
        
        if(tracks.length > 0){
          idle = true;
        }else{
          $scope.hasSearchResults = false;
        }

    	});  
    }
  }

  init();


}]);