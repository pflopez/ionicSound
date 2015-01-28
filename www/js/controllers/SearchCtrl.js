angular.module('starter')
.controller('SearchCtrl', 
				['$scope', '$ionicLoading', 'SoundCloudQuery', '$ionicModal', '$moment',
function( $scope,   $ionicLoading,   SoundCloudQuery,   $ionicModal,   $moment) {
	var idle 	= false;
	var query;
	//init the controller
	init();
	
	function init(){

		$scope.query = {};
		$scope.hasSearchResults = false;

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


	$scope.clearQuery = function(){
		$scope.query.value = null;
	}

	/**
	 * Makes initial search
	 */
	$scope.search = function(){
		$ionicLoading.show();
	  query =  SoundCloudQuery.query({q:$scope.query.value});
		query.getNextPage().then(function(results){
			$scope.results =  results;
			$scope.$broadcast('scroll.infiniteScrollComplete');
  		$ionicLoading.hide();
    	if(results.length > 0){
  			$scope.hasSearchResults = true;
				idle = true;
			}else{
				$scope.hasSearchResults = false;
			}
  	});  
    
	};

	/**
	 * Loads more results
	 * @return {[type]}
	 */
	$scope.loadMore = function(){
		if(idle){
			idle = false;
			query.getNextPage().then(function(results){
				$scope.results = $scope.results ? $scope.results.concat(results) : results;
				$scope.$broadcast('scroll.infiniteScrollComplete');
				if(results.length > 0){
					idle = true;
				}else{
					$scope.hasSearchResults = false;
				}
			});  
		}
	}

}]);