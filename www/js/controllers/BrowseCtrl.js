angular.module('starter')
.controller('BrowseCtrl', 
				['$scope', '$ionicLoading', 'SoundCloudQuery', 'Utils', '$stateParams', '$ionicModal', '$moment',
function( $scope,   $ionicLoading,   SoundCloudQuery,   Utils ,  $stateParams ,  $ionicModal,   $moment ) {
	var idle 	= false;
	var query;



	$scope.searchByTag = function(tag){
		$ionicLoading.show();
	  query = SoundCloudQuery.query( { tags: tag } );

	  query.getNextPage().then(function(results){
			$scope.results =  results;
  		$ionicLoading.hide();
  		$scope.showList = true;
  	});  
	}

	/**
	 * Loads more results
	 * @return {[type]}
	 */
	$scope.loadMore = function(){	
		return query.getNextPage().then(function(results){
			$scope.results = $scope.results ? $scope.results.concat(results) : results;
			return results;
		});  
		
	};

	function init(){
		$ionicLoading.show();
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
	}

	init();
}]);