angular.module('starter')
.controller('SearchCtrl', ['$scope', '$ionicLoading', 'SoundCloudQuery',function($scope,$ionicLoading, SoundCloudQuery) {
	var idle 	= false;
	var query;
	init();
	
	function init(){
		console.log('init');
		$scope.query = {};
		$scope.endOfRecords = false;
		$scope.hasSearchResults = false;
	}



	$scope.clearQuery = function(){
		$scope.query.value = null;
	}

	/**
	 * Makes initial search
	 */
	$scope.search = function(){
		$ionicLoading.show();
		console.log($scope);
	  query =  SoundCloudQuery.query({q:$scope.query.value});
		query.getNextPage().then(function(results){
			$scope.results =  results;
  		$ionicLoading.hide();

    	if(results > 0){
  			$scope.hasSearchResults = true;
				enableScroll();	
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
				if(results > 0){
					enableScroll();	
				}else{
					$scope.hasSearchResults = false;
				}
				
			});  
		}
	}

	
	/**
	 * helper
	 * @private
	 * @return {[type]}
	 */
	function enableScroll(){
		idle = true;
  	$scope.$broadcast('scroll.infiniteScrollComplete');
	}

}]);