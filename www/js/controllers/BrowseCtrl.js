angular.module('starter')
.controller('BrowseCtrl', 
				['$scope', '$ionicLoading', 'SoundCloudQuery', 'Utils', '$stateParams', '$ionicModal', '$moment',
function( $scope,   $ionicLoading,   SoundCloudQuery,   Utils ,  $stateParams ,  $ionicModal,   $moment ) {
	var idle 	= false;
	var query;

	function prepareModal(){
 		$ionicModal.fromTemplateUrl('templates/info.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });
	}


	$scope.resultClick = function(result){
		$scope.info = result;

		result.big_artwork = result.artwork_url ? result.artwork_url.replace('large', 't500x500') : '';
		result.proper_time = $moment.utc(result.duration).format("HH:mm:ss");

		$scope.modal.show();
	}

	$scope.closeModal = function(){
		$scope.modal.hide();
		//clear info
		$scope.info = null;	
	}

	$scope.searchByTag = function(tag){
		$ionicLoading.show();
	  query = SoundCloudQuery.query( { tags: tag } );

	  query.getNextPage().then(function(results){
			$scope.results =  results;
			$scope.$broadcast('scroll.infiniteScrollComplete');
  		$ionicLoading.hide();

  		$scope.showList = true;
    	if(results.length > 0){
  			$scope.hasSearchResults = true;
				idle = true;
			}else{
				$scope.hasSearchResults = false;
			}
  	});  
	}

	function init(){
		$ionicLoading.show();
		prepareModal();

		if($stateParams.tag){
			$scope.showList = true;
			//if I have the tag..
			$scope.title = $stateParams.tag;
			$scope.searchByTag($stateParams.tag.toLowerCase());	
		}else{
			$scope.title = 'Browse';
			$scope.showList = false;
			query = SoundCloudQuery.query({});
			query.getNextPage().then(function(results){
				$scope.tags =  Utils.filterTags(results);;
		 		$ionicLoading.hide();
	 		});	
		}
		
		//$scope.endOfRecords = false;
		//$scope.hasSearchResults = false;
		$ionicLoading.show();
	}

	init();
}]);