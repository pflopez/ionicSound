angular.module('starter')
.controller('SearchCtrl', ['$scope', '$ionicLoading', 'SoundCloudQuery',function($scope,$ionicLoading, SoundCloudQuery) {
	var idle 	= false;
	var query;
	$scope.query = {};
	$scope.hasSearchResults = false;

	function enableScroll(){
		idle = true;
  	$scope.$broadcast('scroll.infiniteScrollComplete');
	}

	$scope.clearQuery = function(){
		$scope.query.value = null;
	}

	$scope.search = function(){
		$ionicLoading.show();
	  query =  SoundCloudQuery.query({q:$scope.query});
		query.getNextPage().then(function(results){
			$scope.results =  results;
  		$ionicLoading.hide();
  		$scope.hasSearchResults = true;

    	enableScroll();
  	});  
    
	};

	$scope.loadMore = function(){
		if(idle){
			idle = false;
			query.getNextPage().then(function(results){
				$scope.results = $scope.results ? $scope.results.concat(results) : results;
				enableScroll();
			});  
		}
	}






}]);