angular.module('ionicSound')
.controller('SearchCtrl', 
				['$scope', '$ionicLoading', 'SoundCloudQuery', '$ionicModal', '$moment', 'KeyboardService',
function( $scope,   $ionicLoading,   SoundCloudQuery,   $ionicModal,   $moment ,  KeyboardService ) {
	
	var query;
	//$scope.query = {};
	//init the controller
	init();
	
	/**
	 * init
	 * @return {[type]} [description]
	 */
	function init(){
	

	  // Create the login modal that we will use later
	  $ionicModal.fromTemplateUrl('templates/info.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });
	}

	/**
	 * Clearing query
	 * @return {[type]} [description]
	 */
	$scope.clearQuery = function(){
		$scope.query.value = null;
	}

	/**
	 * Search action
	 * @param  {[type]} so [description]
	 * @return {[type]}    [description]
	 */
	$scope.search = function(so){
		KeyboardService.hide();
		$ionicLoading.show();
	  query =  SoundCloudQuery.query({q:so.query});
		query.getNextPage().then(function(results){
			$scope.results = results;
  		$ionicLoading.hide();
  	});    
	};

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



}]);